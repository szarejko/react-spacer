import { setBreakpoints, setColors } from 'global-styles/styles'

import { fadeIn } from 'global-styles/animations'
import styled from 'styled-components'

export const ClaimWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Claim = styled.h1`
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

export const SubClaim = styled.p`
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
