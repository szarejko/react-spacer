import { setBreakpoints, setShadow } from 'global-styles/styles'

import { opacityIn } from 'global-styles/animations'
import styled from 'styled-components'

export const ResultsList = styled.ul`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: ${setBreakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${setBreakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ResultsListItem = styled.li`
  list-style: none;
  border-radius: 5px;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  ${opacityIn()};

  &:hover {
    filter: sepia(90%);
  }
`

export const ResultsImgWrapper = styled.figure`
  width: 80vw;
  height: 25rem;
  display: inline-block;

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 40vw;
    height: 35rem;
  }

  @media (min-width: ${setBreakpoints.desktop}) {
    width: 25vw;
  }

  img {
    box-shadow: ${setShadow.second};
    object-fit: cover;
    object-position: 50% 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`
