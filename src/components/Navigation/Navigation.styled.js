import { setBreakpoints, setColors } from 'components/global/styles'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.4rem;

  @media (min-width: ${setBreakpoints.tablet}) {
    padding: 2rem;
  }
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  transition: all 0.5s ease;
  color: ${setColors.linkColor};
  font-size: 15px;
  word-spacing: -1px;

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 20px;
  }

  &:first-child {
    margin-left: 1.5rem;

    @media (min-width: ${setBreakpoints.tablet}) {
      margin-left: 3rem;
    }
  }

  &.isActive,
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`
