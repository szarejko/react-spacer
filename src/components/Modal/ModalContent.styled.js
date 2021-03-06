import { setBreakpoints, setColors } from 'global-styles/styles'

import styled from 'styled-components'

export const ModalContWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${setBreakpoints.tablet}) {
    flex-direction: row;
  }
`

export const ModalContImg = styled.figure`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 50%;
    margin: 0 1.5rem 0 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const ModalContDescription = styled.div`
  width: 100%;

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 50%;
    padding-left: 1.5rem;
    border-left: 1px solid ${setColors.grey};
  }

  p {
    margin-bottom: 1rem;
  }
`

export const ModalContTitle = styled.h2`
  margin-bottom: 2rem;
`
