import React from "react"
import * as d3 from "d3"


class TimeSeries extends React.Component

  ###*
   * TimeSeries Field for the Listing Table
   *
   * A multi value field is identified by the column type "timeseries" in the
   * listing view, e.g.  `self.columns = {"Result": {"type": "timeseries"}, ... }`
   *
  ###
  constructor: (props) ->
    super(props)

    # remember the initial value
    @state =
      value: props.defaultValue

    # bind event handler to the current context
    @on_change = @on_change.bind @

    @svgRef = React.createRef()

  ###*
   * Event handler when the value changed of the field
   * Extract all values in the matrix and store
   * them in a list of lists
   * @param event {object} ReactJS event object
  ###
  on_change: (event) ->
    el = event.currentTarget
    # Get the parent table
    table = el.parentNode.parentNode.parentNode
    # Extract all row elements that store values
    rows = table.querySelectorAll("tr")
    row_cnt = 0
    values = []
    for row in rows
      row_cnt += 1
      if row_cnt == 1
        # Ignore first row which is the header
        continue
      # Extract all inputs in the row
      inputs = row.querySelectorAll("input")
      console.log "TimeSeries::on_change: row num=#{row_cnt} num inputs=#{inputs.length}"
      # Extract the UID attribute
      uid = el.getAttribute("uid")
      # Extract the column_key attribute
      name = el.getAttribute("column_key") or el.name
      # The value to store is a list of results
      row_values = (input.value.trim() for input in inputs)
      # Filter out empty values
      row_values = row_values.filter (value) -> value isnt ""
      console.log "TimeSeries::on_change: row num=#{row_cnt} values=#{row_values}"
      if row_values.length > 0
        # Ignore empty rows, probably the last row
        values.push(row_values)


    # store the new value
    @setState
      value: values

    # Call the *update* field handler
    if @props.update_editable_field
      @props.update_editable_field uid, name, values, @props.item

  componentDidMount: ->
    # D3 can only be used after the component has mounted, ensuring the DOM is available
    @build_graph()

  ###
   * Converts the string value to an array
  ###
  to_matrix: (listString, headers) ->
    # No values yet
    if listString == ""
      return ""

    # Parse the string version of the list of lists into an array
    list = JSON.parse(listString)

    # Map each inner list to an object using the headers
    matrix = list.map (innerList) ->
        obj = {}
        headers.forEach (header, index) ->
            obj[header] = innerList[index]
        obj

    matrix.map (row) ->
        headers.forEach (header, index) ->
            if index = 0
              row[header] = row[header]
            else
              row[header] = parseFloat(row[header])
    matrix


  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_rows: ->
    # Convert the result to a matrix of rows
    columns = @props.item.time_series_columns
    headers = columns.map (i) -> i.ColumnTitle
    header_len = headers.length
    console.log('build_rows: header len=' + header_len);
    values = @state.value
    matrix = @to_matrix(values, headers)


    # Build the rows
    output = []

    # create header row
    th_inputs = []
    for head in headers
      th_inputs.push(
        <th>
          <input type="text"
                 # size={@props.size or 5}
                 value={head}
                 uid={@props.uid}
                 name={@props.name}
                 title={@props.help or @props.title}
                 onChange={@props.onChange or @on_change}
                 column_key={@props.column_key}
                 className={@props.className}
                 readOnly="readOnly"
                 {...@props.attrs} />
        </th>
      )
    output.push(
      <thead>
        <tr>
          {th_inputs}
        </tr>
      </thead>
    )
    # Create rows on inputs
    row_output = []
    cnt = 0
    for row in matrix
      cnt += 1
      # Create list of TDs
      td_inputs = []
      for key, val of row
        # if this.props.item.result_type == "timeseries_readonly"
        if true  # HACKED READ-WRITE now
          if isNaN(val)
            val = ""
          td_inputs.push(
            <td>
              <input type="text"
                     # size={@props.size or 5}
                     value={val}
                     uid={@props.uid}
                     name={@props.name}
                     title={@props.help or @props.title}
                     onChange={@props.onChange or @on_change}
                     column_key={@props.column_key}
                     className={@props.className}
                     readOnly="readOnly"
                     {...@props.attrs} />
            </td>)
        else
          # console.log "TimeSeries::build_rows: EDITABLE #{cnt}: value=#{row}"
          td_inputs.push(
            <td>
              <input type="text"
                     # size={@props.size or 5}
                     value={val}
                     uid={@props.uid}
                     name={@props.name}
                     title={@props.help or @props.title}
                     onChange={@props.onChange or @on_change}
                     column_key={@props.column_key}
                     className={@props.className}
                     {...@props.attrs} />
            </td>)
      # Add row to output
      row_output.push(
        <tr>
          {td_inputs}
        </tr>
      )

    output.push(
      <tbody>
        {row_output}
      </tbody>
    )

    console.log('build_rows: done')
    return output


  ###
   * generate colors - all shades of red
  ###
  generateRedShades = (n) ->
    d3.range(n).map((i) ->
      d3.interpolateRgb("#ff0000", "#aa0000")(i / (n - 1))
    )
  generateRandomColors = (count) ->
    colors = []
    for [1..count]
      color = Math.random().toString(16).slice(2, 8)
      colors.push("#" + color)
    colors
  getColors = (count) ->
    colors = [
      "#264653",
      "#2A9D8F",
      "#E9C46A",
      "#F4A261",
      "#E76F51",
    ]
    colors.slice(0, count)

  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_graph: ->
    console.log "TimeSeries::build_graph: entered"
    if @svgRef?.current

      console.log "TimeSeries::build_graph: is current"
      values = @state.value

      if values == ""
        console.log "TimeSeries::build_graph: exit because no data"
        @svgRef.current.appendChild([])
        return

      # Get datasets
      columns = @props.item.time_series_columns
      col_types = columns.map (i) -> i.ColumnType
      headers = columns.map (i) -> i.ColumnTitle
      index = headers[0]
      data = @to_matrix(values, headers)

      # Generate the line colors (exclude index)
      colors = generateRedShades(headers.length - 1)
      if col_types[col_types.length - 1] == "average"
        colors[colors.length - 1] = "#000000"  # replace the last color with black
      # console.log(colors)

      # Set up dimensions
      margin = {top: 40, right: 80, bottom: 50, left: 60}
      width = 800 - margin.left - margin.right
      height = 400 - margin.top - margin.bottom + 50

      # Set up scales
      x = d3.scaleLinear()
        .domain(d3.extent(data, (d) -> parseFloat(d[index])))
        .range([0, width])

      # Set up Y scale with trimmed domain
      minY = d3.min(data.flatMap((row) -> headers.slice(1).map((header) -> parseFloat(row[header]))))
      minY = minY- (minY * 0.1)
      maxY = d3.max(data.flatMap((row) -> headers.slice(1).map((header) -> parseFloat(row[header]))))
      # maxY = maxY + (maxY * 0.1)

      y = d3.scaleLinear()
        .domain([Math.floor(minY), Math.ceil(maxY)])  # Trim domain to just cover data range
        .range([height, 0])

      # Line generator
      line = d3.line()
        .x((d) ->
          console.debug("Mapping X:", d.index, "to", x(d.index))
          x(d.index)
        )
        .y((d) ->
          console.debug("Mapping Y:", d.value, "to", y(d.value))
          y(d.value)
        )

      # Create SVG container
      svg = d3.select(@svgRef.current)
        .style("height", "#{height+120}px")

      # Remove any previous SVG content
      svg.selectAll('*').remove()

      svg = svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(#{margin.left},#{margin.top})")

      # Graph title
      svg.append("text")
        .attr("x", width / 2)
        .attr("y", -margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text(@props.item.time_series_graph_title)

      # X-axis
      svg.append("g")
        .attr("transform", "translate(0,#{height})")
        .call(d3.axisBottom(x))

      # X-axis label
      svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 10)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(@props.item.time_series_graph_xaxis)

      # Y-axis
      svg.append("g")
        .call(d3.axisLeft(y))

      # Y-axis label
      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 15)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(@props.item.time_series_graph_yaxis)

      # Add horizontal grid lines
      svg.append("g")
        .attr("class", "grid horizontal")
        .attr("transform", "translate(0, 0)")
        .call(
          d3.axisLeft(y)
            .tickSize(-width)  # Extend ticks across the chart width
            .tickFormat("")    # Remove tick labels
        )
        .selectAll("line")
        .style("stroke", "#999")  # Lighter gray
        # .style("stroke-dasharray", "2,2")
        .style("opacity", 0.8)       # Adjust transparency

      # Add vertical grid lines
      svg.append("g")
        .attr("class", "grid vertical")
        .attr("transform", "translate(0, #{height})")
        .call(
          d3.axisBottom(x)
            .tickSize(-height)  # Extend ticks across the chart height
            .tickFormat("")     # Remove tick labels
        )
        .selectAll("line")
        .style("stroke", "#999")  # Lighter gray
        .style("stroke-dasharray", "2,2")
        .style("opacity", 0.8)       # Adjust transparency

      # Draw axes
      svg.append("g")
        .attr("transform", "translate(0,#{height})")
        .call(d3.axisBottom(x))

      svg.append("g")
        .call(d3.axisLeft(y))

      # Prepare data for each line
      lines = headers.slice(1).map((header) ->
        {
          name: header
          values: data.map((row) -> 
            if not isNaN(row[header])
              index: parseFloat(row[index]) or 0
              value: parseFloat(row[header]) or 0
          ).filter((item) -> item?) # Remove undefined items
        }
      )

      # Draw lines
      svg.append("g").selectAll(".line")
        .data(lines)
        .enter().append("path")
        .attr("class", "line")
        .attr("d", (d) -> line(d.values))
        .style("fill", "none")
        .style("stroke", (d, i) -> colors[i])  # Use predefined colors by index
        .style("stroke-width", 2)

      # Draw circles at data points
      svg.selectAll(".circle-group")
        .data(lines)
        .enter().append("g")
        .attr("class", "circle-group")
        .style("fill", (d, i) -> colors[i])
        .selectAll("circle")
        .data((d) -> d.values)
        .enter().append("circle")
        .attr("cx", (d) -> x(d.index))
        .attr("cy", (d) -> y(d.value))
        .attr("r", 4) # Radius of the circle
        .style("stroke", "white")
        .style("stroke-width", 1.5)

      # Add legend
      legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(50, #{height + 50})")  # Move legend below the graph

      # Add legend items
      legendItems = legend.selectAll("g")
        .data(headers.slice(1))
        .enter().append("g")
        .attr("transform", (d, i) ->
          xOffset = (i % Math.floor(width / 100)) * 100  # Horizontal spacing
          yOffset = Math.floor(i / Math.floor(width / 100)) * 20  # Vertical spacing
          "translate(#{xOffset}, #{yOffset})"
        )


      # Add legend color squares
      legendItems.append("rect")
        .attr("x", 0)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", (d, i) -> colors[i])

      # Add legend text
      legendItems.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", "0.35em")
        .style("font-size", "12px")
        .text((d) -> d)


      console.log "TimeSeries::build_graph: done"


  render: ->
    values = @state.value

    if values.length == 0
      console.log "TimeSeries::render: no values"
      <div className={@props.field_css or "timeseries"}>
        {@props.before and <span className={@props.before_css or "before_field"} dangerouslySetInnerHTML={{__html: @props.before}}></span>}
        <table className="time-series-table" tabIndex={@props.tabIndex}>
          {@build_rows()}
        </table>
        {@props.after and <span className={@props.after_css or "after_field"} dangerouslySetInnerHTML={{__html: @props.after}}></span>}
      </div>
    else
      console.log "TimeSeries::render: got #{values.length} values #{values} "
      <div className={@props.field_css or "timeseries"}>
        {@props.before and <span className={@props.before_css or "before_field"} dangerouslySetInnerHTML={{__html: @props.before}}></span>}
        <table className="time-series-table" tabIndex={@props.tabIndex}>
          {@build_rows()}
        </table>
        <svg ref={@svgRef} />
        {@props.after and <span className={@props.after_css or "after_field"} dangerouslySetInnerHTML={{__html: @props.after}}></span>}
      </div>


export default TimeSeries
