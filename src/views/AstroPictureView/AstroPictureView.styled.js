import { setBreakpoints, setGradient } from 'global-styles/styles'

import styled from 'styled-components';

export const PictureBoxWrapper = styled.div`
  width: 100%;
  background: ${setGradient.main};
  height: 100vh;
  padding-top: 5.5rem;
  margin-top: -5.5rem;

  @media (min-width: ${setBreakpoints.tablet}) {
    padding-top: 10rem;
    margin-top: -10rem;
  }
`
