import { setBreakpoints, setColors } from 'components/globals/styles'

import styled from 'styled-components';

export const CloseBtn = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border: 1px solid ${setColors.grey};
  border-radius: 0.5rem;

  @media (min-width: ${setBreakpoints.tablet}) {
    margin-bottom: 1.5rem;
  }

  &:hover {
    transition: color 0.3s ease-in-out;
    border-color: ${setColors.blackTransparent};
    color: ${setColors.blackTransparent};
  }
`
