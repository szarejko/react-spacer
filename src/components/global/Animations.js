import { css, keyframes } from 'styled-components'

export const fadeIn = (start, middle, end) => {
  const amination = keyframes`
  0% {
    opacity: 0;
    transform: translateY(${start});
  }
  50% {
    opacity: 0.5;
    transform: translateY(${middle});
  }
  100% {
    opacity: 1;
    transform: translateY(${end});
  }
  `
  return css`
    animation: ${amination} 2s ease-in-out;
  `
}
