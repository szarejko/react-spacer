import * as color from 'variables'
import PropTypes from "prop-types";
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 3rem;
  margin-top: 5rem;
  border: 0;
  font-size: 18px;
  text-align: center;
  transition: box-shadow 0.5s;
  background: none;
  border-bottom: 1px solid;

  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};

  &:focus {
    caret-color: ${color.primaryColor};
    outline: none;
    box-shadow: 0 15px 12px -12px ${color.whiteTransparent};
  }
`
export const darkTheme = {
  borderColor: `${color.black}`,
  textColor: `${color.black}`,
}

export const lightTheme = {
  borderColor: `${color.primaryColor}`,
  textColor: `${color.primaryColor}`,
}

const SearchInput = ({ change, value, theme }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Input type='text' value={value} onChange={change} theme={theme ? null : darkTheme} />
    </ThemeProvider>
  )
}

export default SearchInput

SearchInput.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired
}
