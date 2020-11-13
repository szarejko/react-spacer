import { DateInputWrapper } from './DateInput.styled'
import React from 'react'

const DateInput = ({ date, change, startDate }) => {

  const minDate = (date.slice(0,4) - 1) + '-01-31'

  return (
    <DateInputWrapper>
      <label htmlFor='dateID'>Select a photo of the day:</label>
      <input id='dateID' type='date' name='date' value={date} onChange={change} min={minDate} max={startDate}/>
    </DateInputWrapper>
  )
}

export default DateInput
