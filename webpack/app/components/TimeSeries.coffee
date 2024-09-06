import React from "react"


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
      # The value to store is a list of values
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

  ###
   * print array values
  ###
  print_array: (values) ->
    console.log "TimeSeries::print_array: values = #{values}"
    # console.debug "TimeSeries:print_array: values is array? #{Array.isArray(values)}"
    # if not Array.isArray(values)
    #   console.debug "TimeSeries::print_array: values is not an array"
    #   return
    # cnt = 0
    # for val in values
    #   cnt += 1
    #   if not Array.isArray(val)
    #     console.debug "TimeSeries::print_array: #{cnt}: not array val = #{val}"
    #   else
    #     console.debug "TimeSeries::print_array: #{cnt}: array val = #{val}"

  ###
   * Converts the value to an array
  ###
  to_matrix: (value) ->
    console.log "TimeSeries::to_matrix:value=#{value}"
    headers = ['Index', 'Sample1', 'Sample2', 'Sample3', 'Ave']
    if not value
      return [headers]
    if Array.isArray(value)
      result = []
      result.push(headers)
      row_values = []
      for row in value
        len = row.length
        rem = 5 - len
        if rem > 0
          for i in [1..rem]
            row.push("")
        result.push(row)
        # console.log "TimeSeries:to_matrix: len=#{len} rem=#{rem}"
        # console.log "TimeSeries:to_matrix: value is array? #{Array.isArray(value)}"
        # console.log "TimeSeries:to_matrix: print value"
        # @print_array(value)
        # console.log "TimeSeries:to_matrix: print result"
        # @print_array(result)
      return result
    debugger;
    console.log "TimeSeries::to_matrix: WTF?"
    parsed = JSON.parse value
    if not Array.isArray(parsed)
      # This might happen when a default value is set, e.g. 0
      return [parsed]
    return parsed

  ###
   * Inputs list builder. Generates a list with as many inputs as values set
  ###
  build_inputs: ->
    # Convert the result to an array
    console.log "TimeSeries::build_elements:state.value='#{@state.value}'"
    values = @to_matrix @state.value
    console.log "TimeSeries::build_elements:values before ='#{values}'"

    #  # filter out empties
    #  values = values.filter (value) -> value isnt ""

    # Add an empty value at the end
    values.push(["", "", "", "", ""])

    # Build the elements
    inputs = []
    console.log "TimeSeries::build_elements:values='#{values}'"
    cnt = 0
    for value in values
      cnt += 1
      console.log "TimeSeries::build_elements: '#{cnt}': value='#{value}' array? #{Array.isArray(value)} len=#{value.length}"
      li_inputs = []
      if cnt == 1
        for sub in value
          # console.log "TimeSeries::build_elements: header sub='#{sub}'"
          @print_array(sub)
          li_inputs.push(
            <th>
              <input type="text"
                     size={@props.size or 5}
                     value={sub}
                     uid={@props.uid}
                     name={@props.name}
                     title={@props.help or @props.title}
                     onChange={@props.onChange or @on_change}
                     column_key={@props.column_key}
                     className={@props.className}
                     readonly="readonly"
                     {...@props.attrs} />
            </th>
          )
      else
        for sub in value
          @print_array(sub)
          # console.log "TimeSeries::build_elements: body sub='#{sub}'"
          li_inputs.push(
            <td>
              <input type="text"
                     size={@props.size or 5}
                     value={sub}
                     uid={@props.uid}
                     name={@props.name}
                     title={@props.help or @props.title}
                     onChange={@props.onChange or @on_change}
                     column_key={@props.column_key}
                     className={@props.className}
                     {...@props.attrs} />
            </td>
          )
      inputs.push(
        <tr>
          {li_inputs}
        </tr>
      )

    return inputs

  render: ->
    <div className={@props.field_css or "timeseries"}>
      {@props.before and <span className={@props.before_css or "before_field"} dangerouslySetInnerHTML={{__html: @props.before}}></span>}
      <table class="time-series-table" tabIndex={@props.tabIndex}>
        {@build_inputs()}
      </table>
      {@props.after and <span className={@props.after_css or "after_field"} dangerouslySetInnerHTML={{__html: @props.after}}></span>}
    </div>


export default TimeSeries
