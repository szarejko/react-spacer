import { setBreakpoints, setColors, setShadow } from 'global-styles/styles'

import styled from 'styled-components'

export const LoadButton = styled.button`
  display: block;
  border: 0;
  margin: 2rem auto;
  padding: 0.8rem 2rem;
  font-size: 14px;
  background-color: ${setColors.red};
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: ${setShadow.second};
  transition: opacity 0.3s;

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 15px;
  }

  &:hover {
    opacity: 0.8;
  }
`
