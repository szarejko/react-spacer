import * as styled from './Spinner.styled'

import React from 'react'
import spinner from 'assets/animated_icons/spinner.svg'

const Spinner = () => (
  <styled.SpinnerWrapper>
    <img src={`${spinner}`} alt='' />
  </styled.SpinnerWrapper>
)

export default Spinner
