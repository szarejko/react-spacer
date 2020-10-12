import React from 'react'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  margin-top: 50px;
  width: 300px;
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
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
