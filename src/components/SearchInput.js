import React from 'react'
import styled from 'styled-components'
import { primaryColor } from 'variables'

const SearchWrapper = styled.div`
  margin-top: 50px;
  width: 300px;
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid ${primaryColor};
    background: none;
  }
`

const SearchInput = ({ change, value }) => {
  return (
    <SearchWrapper>
      <input type='text' value={value} onChange={change} />
    </SearchWrapper>
  )
}

export default SearchInput
