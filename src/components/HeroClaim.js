import { setBreakpoints, setColors } from 'components/globals/styles'

import React from 'react'
import { fadeIn } from 'components/globals/Animations'
import styled from 'styled-components'

const ClaimWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Claim = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: ${setColors.primaryColor};
  ${fadeIn('80%', '0', '0')};

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 80px;
  }

  @media (min-width: ${setBreakpoints.desktop}) {
    font-size: 100px;
  }
`

const SubClaim = styled.p`
  margin-top: 2rem;
  font-size: 15px;
  color: ${setColors.primaryColor};
  ${fadeIn('-80%', '0', '0')};

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 50rem;
    font-size: 18px;
    letter-spacing: 1px;
  }
`

const HeroClaim = () => {
  return (
    <ClaimWrapper>
      <Claim>SPACER</Claim>
      <SubClaim>
        Begin your journey through our amazing galaxy, and discover places you never heard of.
      </SubClaim>
      <SubClaim>Type anything space-related and hit "ENTER" to start.</SubClaim>
    </ClaimWrapper>
  )
}

export default HeroClaim
