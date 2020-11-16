import * as styled from './HeroClaim.styled'

import React from 'react'

const HeroClaim = () => {
  return (
    <styled.ClaimWrapper>
      <styled.Claim>SPACER</styled.Claim>
      <styled.SubClaim>
        Begin your journey through our amazing galaxy, and discover places you never heard of.
      </styled.SubClaim>
      <styled.SubClaim>Type anything space-related and hit "ENTER" to start.</styled.SubClaim>
    </styled.ClaimWrapper>
  )
}

export default HeroClaim
