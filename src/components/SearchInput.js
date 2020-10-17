import * as color from 'variables'
import PropTypes from "prop-types";
import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 3rem;
  margin-top: 5rem;
  border: 0;
  font-size: 18px;
  border-bottom: 1px solid ${color.primaryColor};
  background: none;
  color: ${color.primaryColor};
  text-align: center;
  transition: box-shadow 0.5s;

  &:focus {
    caret-color: ${color.primaryColor};
    outline: none;
    box-shadow: 0 15px 12px -12px ${color.whiteTransparent};
  }
`

const SearchInput = ({ change, value }) => {
  return <Input type='text' value={value} onChange={change} />
}

export default SearchInput

SearchInput.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired
}
