import { setBreakpoints } from 'global-styles/styles'
import styled from 'styled-components'

export const AboutTitle = styled.h1`
  margin-bottom: 3rem;
  font-size: 25px;

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 30px;
  }
`

export const AboutPlainText = styled.p`
  font-size: 15px;
  line-height: 1.4;

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`
