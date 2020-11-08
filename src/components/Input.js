import React, { useEffect, useRef } from 'react'
import { darkTheme, lightTheme } from 'components/theme/themes'
import { setBreakpoints, setColors } from 'components/global/styles'
import styled, { ThemeProvider } from 'styled-components'

import PropTypes from 'prop-types'
import iconSearch from 'assets/icons/icon-search.png'

const MainInputWrapper = styled.div`
  padding: 2px;
  margin: 5rem 0;

  @media (min-width: ${setBreakpoints.tablet}) {
    margin: 8rem 0 5rem;
  }
`

const MainInputInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.6rem;
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
    outline: none;
    border: 1px solid;
    border-color: ${({ validation }) => (validation ? 'green' : `${setColors.red}`)};
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
  margin-left: 0.2rem;

  &:hover {
    opacity: 0.3;
  }
`

const InputErrorMsg = styled.span`
  color: ${setColors.red};
  display: inline-block;
`

const IMPUT_ERROR_MSG = 'Please enter three or more letters.'

const Input = ({ change, handleSearch, value, theme, validation }) => {
  const searchInputRef = useRef(true)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  const ErrorMsg = !validation && <InputErrorMsg>{IMPUT_ERROR_MSG}</InputErrorMsg>

  return (
    <ThemeProvider theme={lightTheme}>
      <MainInputWrapper>
        <MainInputInnerWrapper>
          <MainInput
            type='text'
            value={value}
            onChange={change}
            onKeyPress={handleSearch}
            theme={theme ? darkTheme : null}
            ref={searchInputRef}
            validation={validation}
          />
          <MainInputButton theme={theme ? darkTheme : null} onMouseDown={handleSearch} />
        </MainInputInnerWrapper>
        {ErrorMsg}
      </MainInputWrapper>
    </ThemeProvider>
  )
}

export default Input

Input.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired,
}
