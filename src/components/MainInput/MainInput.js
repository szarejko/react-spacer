import { Input, InputButton, InputErrorMsg, InputInnerWrapper, InputWrapper } from './MainInput.styled'
import React, { useEffect, useRef } from 'react'
import { darkTheme, lightTheme } from 'components/theme/themes'

import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const IMPUT_ERROR_MSG = 'Please enter three or more letters.'

const MainInput = ({ change, handleSearch, value, theme, validation }) => {
  const searchInputRef = useRef(true)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  const errorMsg = !validation && <InputErrorMsg>{IMPUT_ERROR_MSG}</InputErrorMsg>

  return (
    <ThemeProvider theme={lightTheme}>
      <InputWrapper>
        <InputInnerWrapper>
          <Input
            type='text'
            value={value}
            onChange={change}
            onKeyPress={handleSearch}
            theme={theme ? darkTheme : null}
            ref={searchInputRef}
            validation={validation}
          />
          <InputButton theme={theme ? darkTheme : null} onMouseDown={handleSearch} />
        </InputInnerWrapper>
        {errorMsg}
      </InputWrapper>
    </ThemeProvider>
  )
}

export default MainInput

MainInput.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string.isRequired,
}
