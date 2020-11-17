import * as styled from './MainInput.styled'

import React, { useEffect, useRef } from 'react'
import { darkTheme, lightTheme } from 'theme/themes'

import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const INPUT_ERROR_MSG = 'Please enter three or more letters.'

const MainInput = ({ change, handleSearch, value, theme, validation }) => {
  const searchInputRef = useRef(true)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  const errorMsg = !validation && <styled.InputErrorMsg>{INPUT_ERROR_MSG}</styled.InputErrorMsg>

  return (
    <ThemeProvider theme={lightTheme}>
      <styled.InputWrapper>
        <styled.InputInnerWrapper>
          <styled.Input
            type='text'
            value={value}
            onChange={change}
            onKeyPress={handleSearch}
            theme={theme ? darkTheme : null}
            ref={searchInputRef}
            validation={validation}
          />
          <styled.InputButton theme={theme ? darkTheme : null} onMouseDown={handleSearch} />
        </styled.InputInnerWrapper>
        {errorMsg}
      </styled.InputWrapper>
    </ThemeProvider>
  )
}

export default MainInput

MainInput.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired,
}
