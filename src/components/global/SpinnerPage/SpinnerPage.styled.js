import { setColors } from 'global-styles/styles'
import styled from 'styled-components'

export const SpinnerPageOverlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${setColors.black};
  opacity: 0.7;
  z-index: 2;
  cursor: progress;
`

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%, -50%);
`
