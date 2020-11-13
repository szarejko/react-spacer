import { LogoWrapper } from './Logo.styled'
import React from 'react'
import iconLogo from 'assets/icons/icon-logo.svg'

const Logo = () => {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <LogoWrapper onClick={reloadPage}>
      <img src={`${iconLogo}`} alt='Logo' />
    </LogoWrapper>
  )
}

export default Logo
