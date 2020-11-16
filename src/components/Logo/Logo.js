import * as styled from './Logo.styled'

import React from 'react'
import iconLogo from 'assets/icons/icon-logo.svg'

const Logo = () => {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <styled.LogoWrapper onClick={reloadPage}>
      <img src={`${iconLogo}`} alt='Logo' />
    </styled.LogoWrapper>
  )
}

export default Logo
