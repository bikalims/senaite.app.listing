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
      # console.log "TimeSeries::on_change: row num=#{row_cnt} values=#{row_values}"
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
  to_matrix: (list, headers, src) ->
    # No values yet
    if list.length == 0
      return ""

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

    ##  console.log 'matrix: ' + JSON.stringify(matrix)
    matrix


  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_rows: ->
    # Convert the result to a matrix of rows
    columns = @props.item.time_series_columns
    # console.log 'columns: ' + columns
    headers = columns.map (i) -> i.ColumnTitle
    # console.log 'header: ' + headers
    index = headers[0]
    header_len = headers.length
    # console.log 'build_rows: header len = ' + header_len
    values = @props.item.time_series_values
    # console.log 'build_rows: values = ' + values
    # Parse the string version of the list of lists into an array
    list = JSON.parse(values)
    matrix = @to_matrix(list, headers, 'table')

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
      td_elements = []
      # console.log "Row = " + row
      for key, value of row
        val = value['val']
        OOR = value['OOR']
        if typeof val isnt 'string' and (val is null or isNaN(val))
          val = ""
        # console.log 'key=' + key + ' val=' + val

        klassName = "time-series-data"
        td_content = []
        # if this.props.item.result_type == "timeseries_readonly"
        if true  # REMOVED READ-WRITE now
          td_content.push(
            <span type="text"
                   uid={@props.uid}
                   name={@props.name}
                   title={@props.help or @props.title}
                   onChange={@props.onChange or @on_change}
                   column_key={@props.column_key}
                   className={@props.className}
                   {...@props.attrs}>{val}</span>)
          if key != index and OOR
            klassName += " time-series-oor"
          td_elements.push(
              <td className={klassName}>
                {td_content}
              </td>)
        else
          # console.log "TimeSeries::build_rows: EDITABLE #{cnt}: value=#{row}"
          td_elements.push(
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
          {td_elements}
        </tr>
      )

    output.push(
      <tbody>
        {row_output}
      </tbody>
    )

    console.log('build_rows: done')
    return output

  # Don't use symbolCircle because the last line is always a circle - see below
  getLineConfigs = (count) ->
    configs = [
      {symbol: d3.symbolStar, dash: ""}
      {symbol: d3.symbolSquare, dash: ""}
      {symbol: d3.symbolTriangle, dash: ""}
      {symbol: d3.symbolDiamond, dash: ""}
      {symbol: d3.symbolCross, dash: ""}
    ]
    configs.slice(0, count)

  # Create symbol generator
  symbolGenerator = d3.symbol().size(48)  # Adjust size as needed

  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_graph: ->
    # console.log "TimeSeries::build_graph: entered"
    if @svgRef?.current

      # console.log "TimeSeries::build_graph: is current"
      values = @state.value

      if values == ""
        console.log "TimeSeries::build_graph: exit because no data"
        @svgRef.current.appendChild([])
        return

      # Get datasets
      columns = @props.item.time_series_columns
      visible_cols = (c for c in columns when c.ColumnHide != 'on')
      if visible_cols.length == 0
        return
      col_types = visible_cols.map (i) -> i.ColumnType
      col_colors = visible_cols.map (i) -> i.ColumnColor
      headers = visible_cols.map (i) -> i.ColumnTitle
      # console.log 'Graph headers: ' + headers
      index = headers[0]
      # console.log 'Graph raw data: ' + values
      # Parse the string version of the list of lists into an array
      list = JSON.parse(values)
      err_col = ""
      err_key = ""
      error_columns = (c for c in columns when c.ColumnType == 'errorbar')
      if error_columns.length == 1
        err_col = error_columns[0]
        err_key = error_columns[0].ColumnTitle
      avg_col = ""
      avg_key = ""
      avg_columns = (c for c in columns when c.ColumnType == 'average')
      if avg_columns.length == 1
          avg_col = avg_columns[0]
          avg_key = avg_columns[0].ColumnTitle
      legend_headers = (c.ColumnTitle for c in columns when c.ColumnHide != 'on' and c.ColumnType != 'errorbar').slice(1)

      # console.log 'Error Key: ' + err_key
      visible_idxs = (i for c, i in columns when c.ColumnHide != 'on')
      visible_values = list.map (row) ->
         (row[i] for i in visible_idxs)
      data = @to_matrix(visible_values, headers, 'graph')
      # console.log 'Graph data: ' + data

      # Generate the line colors (exclude index)
      line_configs = getLineConfigs(headers.length - 1)

      # Set up dimensions
      margin = {top: 40, right: 80, bottom: 50, left: 60}
      width = 800 - margin.left - margin.right
      height = 400 - margin.top - margin.bottom + 50

      # Set up scales
      xExtent = d3.extent(data, (d) -> parseFloat(d[index]))
      xScale = d3.scaleLinear()
        .domain(xExtent)
        .range([0, width])

      # Set up Y scale with trimmed domain
      maxError = 0
      if err_key
        maxError = d3.max(data.flatMap((row) -> parseFloat(row[err_key])))

      # console.log data.flatMap((row) -> legend_headers.map((header) -> parseFloat(row[header])))
      absoluteMinY = d3.min(data.flatMap((row) -> legend_headers.map((header) -> parseFloat(row[header]))))
      absoluteMinY -= maxError
      if absoluteMinY == 0
        minY = -0.5
      else if absoluteMinY > 0
        minY = absoluteMinY * 0.95
      else
        minY = absoluteMinY * 1.05

      maxY = d3.max(data.flatMap((row) -> legend_headers.map((header) -> parseFloat(row[header]))))
      maxY += maxError

      # console.log('absMinY: ' + absoluteMinY + ' minY: ' + minY + ' maxY: ' + maxY + " height: " + height)
      yScale = d3.scaleLinear()
        .domain([minY, maxY])
        .nice()  # expands domain to "nice" human-friendly values
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
      # console.log 'Title: ' + @props.item.time_series_graph_title
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
        .call(d3.axisBottom(xScale))

      # X-axis label
      svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 10)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(@props.item.time_series_graph_xaxis)


      # Y-axis label
      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 15)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(this.props.item.time_series_graph_yaxis)

      # y-axis horizontal grid lines
      svg.append("g")
          .attr("class", "grid horizontal")
          .call(
            d3.axisLeft(yScale)
              .tickSize(-width)  # Extend ticks across the chart width
          )
          .selectAll("line")
          .style("stroke", "#999")  # Lighter gray
          .style("opacity", 0.8)       # Adjust transparency

      # Add vertical grid lines
      svg.append("g")
        .attr("class", "grid vertical")
        .attr("transform", "translate(0, #{height})")
        .call(
          d3.axisBottom(xScale)
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
        .call(d3.axisBottom(xScale))

      # Get interpolation
      interp = @props.item.time_series_graph_interpolation
      curve_val = d3[interp]

      # Draw each line
      headers.slice(1).forEach((key, i) ->
        # console.log('Main loop: ' + key + '  ' + i)
        # console.log('Main loop: ' + col_colors[i+1])
        line_config_idx = i % line_configs.length

        lineGen = d3.line()
          .curve(curve_val)
          .x((d) ->
            xScale(d[index])
          )
          .y((d) ->
            yScale(d[key])
          )

        # Filter out empty items before generating the lines
        # console.log 'data: ' + JSON.stringify(data)
        filteredData = data.filter (d) ->
          d[index]? and d[key]? and d[index] isnt "" and d[key] isnt "" and \
          not (typeof d[index] isnt 'string' and (d[index] is null or isNaN(d[index]))) and \
          not (typeof d[key] isnt 'string' and (d[key] is null or isNaN(d[key])))
        # console.log 'filteredData: ' + JSON.stringify(filteredData)

        # console.log 'Loop: i= ' + i + ' key=' + key + ' err='+ err_key
        if key != err_key
          svg.append("path")
            .datum(filteredData)
            .attr("fill", "none")
            .attr("stroke-width", 2)
            .attr("stroke", col_colors[i+1])
            .attr("stroke-dasharray", line_configs[line_config_idx].dash)
            .attr("d", lineGen)

          # Add data points with different symbols
          svg.selectAll(".symbol-#{i}")
            .data(filteredData)
            .enter().append("path")
            .attr("class", "symbol symbol-#{i}")
            .attr("d", symbolGenerator.type(line_configs[line_config_idx].symbol))
            .attr("transform", (d) ->
              "translate(#{xScale(parseFloat(d[index]))}, #{yScale(parseFloat(d[key]))})"
            )
            .style("fill", col_colors[i+1])
            .attr("stroke", col_colors[i+1])
        else
          svg.selectAll(".error-bar")
            .data(filteredData)
            .enter()
            .append("line")
            .attr("class", "error-bar")
            .attr "x1", (d) -> xScale(d[index])
            .attr "x2", (d) -> xScale(d[index])
            .attr "y1", (d) -> yScale(d[avg_key] - d[err_key])
            .attr "y2", (d) -> yScale(d[avg_key] + d[err_key])
            .attr "stroke", avg_col.ColumnColor
            .attr "stroke-width", 1

          # Caps
          capWidth = 0.5

          # Top cap
          svg.selectAll(".error-cap-top")
            .data(filteredData)
            .enter()
            .append("line")
            .attr("class", "error-cap-top")
            .attr "x1", (d) -> xScale(d[index] - capWidth/2)
            .attr "x2", (d) -> xScale(d[index] + capWidth/2)
            .attr "y1", (d) -> yScale(d[avg_key] + d[err_key])
            .attr "y2", (d) -> yScale(d[avg_key] + d[err_key])
            .attr "stroke", avg_col.ColumnColor
            .attr "stroke-width", 1

          # Bottom cap
          svg.selectAll(".error-cap-bottom")
            .data(filteredData)
            .enter()
            .append("line")
            .attr("class", "error-cap-bottom")
            .attr "x1", (d) -> xScale(d[index] - capWidth/2)
            .attr "x2", (d) -> xScale(d[index] + capWidth/2)
            .attr "y1", (d) -> yScale(d[avg_key] - d[err_key])
            .attr "y2", (d) -> yScale(d[avg_key] - d[err_key])
            .attr "stroke", avg_col.ColumnColor
            .attr "stroke-width", 1

      )

      # Add legend
      legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(50, #{height + 50})")  # Move legend below the graph

      # Add legend items
      legendItems = legend.selectAll("g")
        .data(legend_headers)
        .enter().append("g")
        .attr("transform", (d, i) ->
          xOffset = (i % Math.floor(width / 100)) * 100  # Horizontal spacing
          yOffset = Math.floor(i / Math.floor(width / 100)) * 20  # Vertical spacing
          "translate(#{xOffset}, #{yOffset})"
        )

      # Add legend color symbols
      legendItems.append("path")
        .attr("d", (d, i) ->
          line_config_idx = i % line_configs.length
          d3.symbol().type(line_configs[line_config_idx].symbol).size(100)()
        )
        .attr("transform", "translate(9, 9)")  # Center the symbol within the legend item
        .style("fill", (d, i) -> col_colors[i+1])

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
