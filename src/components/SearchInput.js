import React from 'react'
import styled from 'styled-components'
import * as color from 'variables'

const SearchWrapper = styled.div`
  margin-top: 5rem;
  width: 30rem;
  display: flex;
  flex-direction: column;

  input {
    height: 3rem;
    border: 0;
    font-size: 18px;
    border-bottom: 1px solid ${color.primaryColor};
    background: none;
    color: ${color.primaryColor};
    text-align: center;
    transition: box-shadow .5s;

    &:focus {
      caret-color: ${color.primaryColor};
      outline: none;
      box-shadow: 0 15px 12px -12px rgba(255, 255, 255, .8);
    }
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
