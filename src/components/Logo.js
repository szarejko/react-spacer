import React from 'react'
import iconLogo from 'assets/icons/icon-logo.svg'
import { setBreakpoints } from 'components/global/styles'
import styled from 'styled-components'

const LogoWrapper = styled.figure`
  cursor: pointer;

  img {
    display: block;
    max-width: 6rem;
    height: auto;

    @media (min-width: ${setBreakpoints.tablet}) {
      max-width: 8rem;
    }
  }
`

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
