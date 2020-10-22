import React, { useEffect, useRef } from 'react'
import { darkTheme, lightTheme } from 'components/theme/themes'
import styled, { ThemeProvider } from 'styled-components'

import PropTypes from 'prop-types'
import iconSearch from 'assets/icon/icon-search.png'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
  margin: 10rem 0 5rem;
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

  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.background};

  &:focus {
    caret-color: ${({ theme }) => theme.textColor};
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

const InputButton = styled.button`
  border: none;
  width: 3.5rem;
  background: url(${iconSearch}), ${({ theme }) => theme.background};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 55%;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &:hover {
    opacity: 0.3;
  }
`

const SearchInput = ({ change, handleSearch, value, theme }) => {
  const searchInputRef = useRef(true)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <InputWrapper>
        <Input
          type='text'
          value={value}
          onChange={change}
          onKeyPress={handleSearch}
          theme={theme ? darkTheme : null}
          ref={searchInputRef}
        />
        <InputButton theme={theme ? darkTheme : null} onMouseDown={handleSearch} />
      </InputWrapper>
    </ThemeProvider>
  )
}

export default SearchInput

SearchInput.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired,
}
