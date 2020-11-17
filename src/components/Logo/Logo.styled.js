import { setBreakpoints } from 'global-styles/styles'
import styled from 'styled-components'

export const LogoWrapper = styled.figure`
  cursor: pointer;

  img {
    display: block;
    width: 3.5rem;
    height: 3.5rem;

    @media (min-width: ${setBreakpoints.tablet}) {
      width: 6rem;
      height: 6rem;
    }
  }
`
