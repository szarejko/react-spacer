import { primaryColor } from 'variables'
import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Claim = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: ${primaryColor};

  @media (min-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 100px;
  }
`

const SubClaim = styled.p`
  margin-top: 2rem;
  font-size: 15px;
  color: ${primaryColor};

  @media (min-width: 768px) {
    width: 50rem;
    font-size: 18px;
    letter-spacing: 1px;
  }
`

const HeroClaim = () => {
  return (
    <HeroWrapper>
      <Claim>SPACER</Claim>
      <SubClaim>
        Begin your journey through our amazing galaxy, and discover places you never heard of.
      </SubClaim>
      <SubClaim>Type anything space-related to start.</SubClaim>
    </HeroWrapper>
  )
}

export default HeroClaim
