import { darkTheme, lightTheme } from 'themes'
import styled, { ThemeProvider } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'
import iconSearch from 'assets/icon/icon-search.png'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
  margin: 10rem 0 5rem;
`

const InputButton = styled.button`
  border: none;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  width: 3.5rem;
  background: url(${iconSearch}), ${({ theme }) => theme.background};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 55%;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 10;

  &:hover,
  &:active {
    outline: none;
    opacity: 0.5;
  }
`

const Input = styled.input`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 3rem;
  padding-left: 3.5rem;
  border: 0;
  font-size: 18px;
  text-align: center;
  transition: all 0.5s;
  background: none;
  border-bottom: 1px solid;

  border-color: ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.background};

  &:focus {
    caret-color: ${({ theme }) => theme.textColor};
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

const SearchInput = ({ change, keyPress, click, value, theme }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <InputWrapper>
        <Input
          type='text'
          value={value}
          onChange={change}
          onKeyPress={keyPress}
          theme={theme ? darkTheme : null}
        />
        <InputButton theme={theme ? darkTheme : null} onMouseDown={keyPress} />
      </InputWrapper>
    </ThemeProvider>
  )
}

export default SearchInput

SearchInput.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired,
}
