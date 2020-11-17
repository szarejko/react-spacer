import * as styled from './DateInput.styled'

import React from 'react'

const DateInput = ({ date, change, startDate }) => {
  const minDate = `${date.slice(0, 4) - 1}-01-31`

  return (
    <styled.DateInputWrapper>
      <label htmlFor='dateID'>Astronomy Picture of the Day:</label>
      <input
        id='dateID'
        type='date'
        name='date'
        value={date}
        onChange={change}
        min={minDate}
        max={startDate}
      />
    </styled.DateInputWrapper>
  )
}

export default DateInput
