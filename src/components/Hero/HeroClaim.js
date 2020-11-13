import { Claim, ClaimWrapper, SubClaim } from './HeroClaim.styled'

import React from 'react'

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
