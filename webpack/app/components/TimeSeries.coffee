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

  componentDidMount: ->
    # D3 can only be used after the component has mounted, ensuring the DOM is available
    @build_graph()

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

    colors = ['steelblue', 'orange', 'green']

  generateRandomColor: ->
    "#" + Math.floor(Math.random() * 16777215).toString(16)

  ###
   * Converts the string value to an array
  ###
  to_graph_data: (value, header_len) ->
    matrix = @to_matrix(value, header_len)
    datasets = []
    for row, idx in matrix
      data = []
      data.push(
        x: 1,
        y: row[1]
      )
      data.push(
        x: 2,
        y: row[3]
      )
      data.push(
        x: 3,
        y: row[3]
      )
      dataset = 
        name: 'Dataset ' + row[0]
        color: @generateRandomColor()
        data: data
      datasets.push(dataset)

    console.log "TimeSeries::to_graph_data: data=#{data}"
    return datasets

  ###
   * Converts the string value to an array
  ###
  to_matrix: (value, header_len) ->
    console.debug "TimeSeries::to_matrix:value=#{value}"
    if not value
      return []
    if Array.isArray(value)
      result = []
      for row in value
        len = row.length
        rem = header_len - len
        if rem > 0
          for i in [1..rem]
            row.push("")
        result.push(row)
      return result
    if typeof value is 'string'
      # A string value with a list of lists
      parsed = JSON.parse value
      if not Array.isArray(parsed)
        # This might happen when a default value is set, e.g. 0
        return [parsed]
      return parsed
    console.log "TimeSeries::to_matrix: WE SHOULD NEVER GET HERE!!!!"

  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_rows: ->
    # Convert the result to a matrix of rows
    header_len = @props.item.time_series_columns.length
    values = @state.value
    matrix = @to_matrix(values, header_len)
    console.debug "TimeSeries::build_rows: matrix ='#{matrix}'"

    # Add an empty row at the end
    matrix.push(["", "", "", "", ""])

    # Build the rows
    output = []

    # create header row
    th_inputs = []
    headers = @props.item.time_series_columns
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
      for item in row
        # if this.props.item.result_type == "timeseries_readonly"
        if true  # HACK
          console.log "TimeSeries::build_rows: READONLY #{cnt}: value=#{item}"
          td_inputs.push(
            <td>
              <input type="text"
                     # size={@props.size or 5}
                     value={item}
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
          console.log "TimeSeries::build_rows: EDITABLE #{cnt}: value=#{row}"
          td_inputs.push(
            <td>
              <input type="text"
                     # size={@props.size or 5}
                     value={item}
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

    return output

  ###
    * return int and float
  ###
  parseStringValue = (value) ->
    # Try to parse as integer
    intValue = parseInt(value, 10)
    return intValue if not isNaN(intValue) and intValue.toString() is value

    # If not an integer, try to parse as float
    floatValue = parseFloat(value)
    return floatValue if not isNaN(floatValue)

    # If parsing fails, throw an error
    throw new Error("Unable to parse value: #{value}")

  ###
    * parse a string matrix to numbers
  ###
  parseMatrixString: (matrixString) ->
    # Remove outer brackets and parse the string as JSON
    cleanedString = matrixString.replace(/'/g, '"')
    matrix = JSON.parse(cleanedString)

    # Convert all values to numbers
    matrix.map (row) ->
      row.map (val) -> parseFloat(val)


  ###
   * find min and max values of matrix
  ###
  find_yaxis_min_max: (values) ->
    matrix = @parseMatrixString(values)
    min = 0
    max = 0
    for row in matrix
      for num in row[1..]
        if num < min
          min = num
        if num > max
          max = num

    min = min - 0.25
    max = max + 0.25

    "min": min
    "max": max


  ###
   * Inputs table builder. Generates a table of  inputs as matrix
  ###
  build_graph: ->
    if @svgRef?.current

      console.log "TimeSeries::build_graph: entered"
      values = @state.value

      if values == ""
        console.log "TimeSeries::build_graph: exit because no data"
        @svgRef.current.appendChild([])
        return

      # Get datasets
      header_len = @props.item.time_series_columns.length
      datasets = @to_graph_data(values, header_len)

      # Chart dimensions
      width = 500
      height = 300
      margin = {top: 20, right: 150, bottom: 50, left: 50}  # Extra space on right for legend and bottom for axis

      # Scales
      xMax = d3.max(datasets, (dataset) -> d3.max(dataset.data, (d) -> d.x)) + 0.1
      xScale = d3.scaleLinear()
        .domain([0.9, xMax])
        .range([0, width])

      ySize = @find_yaxis_min_max(values)
      console.log "TimeSeries::build_graph: ySize: #{ySize.min} #{ySize.max}"
      yScale = d3.scaleLinear()
        .domain([ySize.min, ySize.max])
        .range([height, 0])

      svg = d3.select(@svgRef.current)

      # Remove any previous SVG content
      svg.selectAll('*').remove()

      # Append a group element for margins
      chartGroup = svg
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', "translate(#{margin.left}, #{margin.top})")

      # Define and append X and Y axes
      xAxis = d3.axisBottom(xScale)
        .tickValues([1, 2, 3])  # Set specific ticks on the x-axis
        .tickFormat(d3.format('d'))  # Format tick values as integers (no decimals)
      yAxis = d3.axisLeft(yScale)

      chartGroup.append('g')
        .attr('class', 'x axis')
        .attr('transform', "translate(0, #{height})")
        .call(xAxis)

      chartGroup.append('g').attr('class', 'y axis').call(yAxis)

      # Create line generator
      line = d3.line()
        .x((d) -> x(d.x))
        .y((d) -> y(d.y))

      # Plot each dataset
      datasets.forEach (dataset) ->
        datasetClass = dataset.name.replace(/\s+/g, '_') # Replace spaces with underscores

        # Define the line generator function
        lineGenerator = d3.line()
            .x((d) -> xScale(d.x))  # Use x value from the data
            .y((d) -> yScale(d.y))  # Use y value from the data

        # Add lines for each dataset
        datasets.forEach (dataset) ->
            chartGroup.append('path')
                .datum(dataset.data)
                .attr('class', 'line')
                .attr('fill', 'none')
                .attr('stroke', dataset.color)
                .attr('stroke-width', 2)
                .attr('d', lineGenerator)

        chartGroup.selectAll("circle.#{datasetClass}")
          .data(dataset.data)
          .enter()
          .append('circle')
          .attr('class', datasetClass)
          .attr('cx', (d) -> xScale(d.x))
          .attr('cy', (d) -> yScale(d.y))
          .attr('r', 5)
          .attr('fill', dataset.color)

      # Create the legend
      legend = chartGroup.selectAll('.legend')
        .data(datasets)
        .enter().append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) -> 'translate(0,' + (i * 20) + ')')  # Adjust vertical spacing

      # Append color rectangles for legend
      legend.append('rect')
        .attr('x', width + 20)  # Position the legend outside the plot area
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', (d) -> d.color)

      # Append text for legend
      legend.append('text')
        .attr('x', width + 45)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'start')
        .text((d) -> d.name)


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
