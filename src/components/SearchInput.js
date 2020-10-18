import * as color from 'variables'

import { darkTheme, lightTheme } from 'themes'
import styled, { ThemeProvider } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'

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

  border-color: ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.textColor};

  &:focus {
    caret-color: ${({ theme }) => theme.textColor};
    outline: none;
    box-shadow: 0 15px 12px -12px ${color.whiteTransparent};
  }
`

const SearchInput = ({ change, value, theme }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Input type='text' value={value} onChange={change} theme={theme ? darkTheme : null} />
    </ThemeProvider>
  )
}

export default SearchInput

SearchInput.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired,
}
