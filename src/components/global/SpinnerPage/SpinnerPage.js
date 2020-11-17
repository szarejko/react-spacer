import * as styled from './SpinnerPage.styled'

import React from 'react'
import spinnerAlt from 'assets/animated_icons/spinner-alt.svg'

const SpinnerPage = () => {
  return (
    <styled.SpinnerPageOverlay>
      <styled.Spinner>
        <img src={`${spinnerAlt}`} alt='' />
      </styled.Spinner>
    </styled.SpinnerPageOverlay>
  )
}

export default SpinnerPage
