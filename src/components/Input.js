import React, { useEffect, useRef } from 'react'
import { darkTheme, lightTheme } from 'components/theme/themes'
import styled, { ThemeProvider } from 'styled-components'

import PropTypes from 'prop-types'
import iconSearch from 'assets/icons/icon-search.png'

const MainInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
  margin: 5rem 0;
`

const MainInput = styled.input`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 3.5rem;
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
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

const MainInputButton = styled.button`
  border: none;
  width: 3.5rem;
  background: url(${iconSearch}), ${({ theme }) => theme.background};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 55%;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: .5rem;

  &:hover {
    opacity: 0.3;
  }
`

const Input = ({ change, handleSearch, value, theme }) => {
  const searchInputRef = useRef(true)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <MainInputWrapper>
        <MainInput
          type='text'
          value={value}
          onChange={change}
          onKeyPress={handleSearch}
          theme={theme ? darkTheme : null}
          ref={searchInputRef}
        />
        <MainInputButton theme={theme ? darkTheme : null} onMouseDown={handleSearch} />
      </MainInputWrapper>
    </ThemeProvider>
  )
}

export default Input

Input.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired,
}
