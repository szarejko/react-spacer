import { setBreakpoints, setColors, setShadow } from 'components/global/styles'

import styled from 'styled-components'

export const ModalOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
  overflow-y: auto;
  background-color: ${setColors.blackTransparent};
`

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${setColors.pale};
  padding: 2rem;
  border: 1px solid ${setColors.grey};
  box-shadow: ${setShadow.main};
  width: 95%;
  translate: all 0.5s;
  border-radius: 5px;
  z-index: 99;

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 80%;
  }

  @media (min-width: ${setBreakpoints.desktop}) {
    max-width: 102.4rem;
    width: 80%;
  }
`
