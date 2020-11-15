import { setColors, setShadow } from 'global-styles/styles'

import styled from 'styled-components'

export const IcoButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: 5px;
  background: ${setColors.primaryColor};
  color: ${setColors.black};
  font-family: system-ui, sans-serif;
  font-size: 1.2rem;
  line-height: 1.4;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem 1rem;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${setShadow.second};
  }

  img {
    padding-right: 0.6rem;
  }
`
