import { setBreakpoints, setColors, setShadow } from 'global-styles/styles'

import styled from 'styled-components'

export const IcoButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: 5px;
  background: ${setColors.whiteTransparent};
  color: ${setColors.black};
  font-size: 14px;
  line-height: 1.6;
  white-space: nowrap;
  margin: 2rem 1rem .5rem;
  padding: 0.4rem 2rem;
  cursor: pointer;
  box-shadow: ${setShadow.second};

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 15px;
  }

  &:hover {
    opacity: 0.8;
    outline: none;
  }

  img {
    padding-right: 0.6rem;
  }
`
