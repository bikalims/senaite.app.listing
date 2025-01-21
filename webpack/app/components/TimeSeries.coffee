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
  to_matrix: (listString, headers, src) ->
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
            if src == 'table'
              row[header] = row[header]
            else if src == 'graph'
              if index = 0
                row[header] = row[header]
              else
                row[header] = parseFloat(row[header])
            else
              console.error 'to_matrix: unknown src ' + src


    matrix


  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_rows: ->
    # Convert the result to a matrix of rows
    columns = @props.item.time_series_columns
    headers = columns.map (i) -> i.ColumnTitle
    index = headers[0]
    header_len = headers.length
    # console.log 'build_rows: header len = ' + header_len
    values = @props.item.time_series_values
    # console.log 'build_rows: values = ' + values
    matrix = @to_matrix(values, headers, 'table')

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
      # console.log "Row = " + row
      for key, value of row
        val = value['val']
        OOR = value['OOR']
        if isNaN(val)
          val = ""
        color = '#2d5e77'
        if key != index and OOR
          color = 'red'
          val = "! " + val
        # console.log 'key=' + key + ' val=' + val
        # if this.props.item.result_type == "timeseries_readonly"
        if true  # REMOVED READ-WRITE now
          td_inputs.push(
            <td>
              <input type="text"
                     value={val}
                     uid={@props.uid}
                     name={@props.name}
                     title={@props.help or @props.title}
                     onChange={@props.onChange or @on_change}
                     column_key={@props.column_key}
                     className={@props.className}
                     readOnly="readOnly"
                     style={color:color}
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

  getLineConfigs = (count) ->
    configs = [
      {color: "#666666", opacity: 1.0, symbol: d3.symbolCircle, dash: ""}
      {color: "#666666", opacity: 0.8, symbol: d3.symbolCircle, dash: ""}
      {color: "#666666", opacity: 0.6, symbol: d3.symbolCircle, dash: ""}
      {color: "#666666", opacity: 0.4, symbol: d3.symbolCircle, dash: ""}
      {color: "#666666", opacity: 0.2, symbol: d3.symbolCircle, dash: ""}
    ]
    configs.slice(0, count)

  # Create symbol generator
  symbolGenerator = d3.symbol().size(24)  # Adjust size as needed

  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_graph: ->
    # console.log "TimeSeries::build_graph: entered"
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
      # console.log 'Graph raw data: ' + values
      data = @to_matrix(values, headers, 'graph')
      # console.log 'Graph data: ' + data

      # Generate the line colors (exclude index)
      line_configs = getLineConfigs(headers.length - 1)
      if col_types[col_types.length - 1] == "average"
        line_configs[line_configs.length - 1].color = "#000000"  # replace the last color with black
        line_configs[line_configs.length - 1].dash = ""  # replace the last color with black
        line_configs[line_configs.length - 1].opacity = "1.0"  # replace the last color with black
        line_configs[line_configs.length - 1].symbol = d3.symbolCircle  # replace the last color with black
      # console.log 'Line configs: ' + line_configs

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

      headers.slice(1).forEach((key, i) ->
        # console.debug('Main loop: ' + key + '  ' + i)
        # Line generator
        line = d3.line()
          .x((d) ->
            # console.debug("Mapping X:", d[index], " to ", x(d[index]))
            x(d[index])
          )
          .y((d) ->
            # console.debug("Mapping Y:", d[key], " to ", y(d[key]))
            y(d[key])
          )

        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke-width", 2)
          .attr("stroke", line_configs[i].color)
          .attr("opacity", line_configs[i].opacity)
          .attr("stroke-dasharray", line_configs[i].dash)
          .attr("d", line)

        # Add data points with different symbols
        svg.selectAll(".symbol-#{i}")
          .data(data)
          .enter().append("path")
          .attr("class", "symbol symbol-#{i}")
          .attr("d", symbolGenerator.type(line_configs[i].symbol))
          # This creates problems with empty vlues
          # .attr("transform", (d) ->
          #   "translate(#{x(parseFloat(d[index]))}, #{y(parseFloat(d[key]))})"
          # )
          .style("fill", line_configs[i].color)
          .style("opacity", line_configs[i].opacity)
      )

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
        .style("fill", (d, i) -> line_configs[i].color)
        .style("opacity", (d, i) -> line_configs[i].opacity)

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
      # console.log "TimeSeries::render: got #{values.length} values #{values} "
      <div className={@props.field_css or "timeseries"}>
        {@props.before and <span className={@props.before_css or "before_field"} dangerouslySetInnerHTML={{__html: @props.before}}></span>}
        <table className="time-series-table" tabIndex={@props.tabIndex}>
          {@build_rows()}
        </table>
        <svg ref={@svgRef} />
        {@props.after and <span className={@props.after_css or "after_field"} dangerouslySetInnerHTML={{__html: @props.after}}></span>}
      </div>


export default TimeSeries
