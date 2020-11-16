import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    max-width: 100%;
    height: auto;
  }
`
