import { NavLink } from 'react-router-dom'
import * as color from 'variables'
import React from 'react'
import styled from 'styled-components';

import Logo from './Logo'

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 20px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  transition: all .5s ease;
  color: ${color.secondaryColor};

  &:first-child {
    margin-right: 20px;
  }

  &:hover {
    text-decoration: underline;
  }

  &.isActive {
    color: ${color.primaryColor};
    font-weight: bold;
  }
`;

const menuLinks = [
  { name: 'home', path: '/', exact: true },
  { name: 'about', path: '/about' },
]

const Navigation = () => {
  const menu = menuLinks.map(({ name, path, exact }) => (
    <li key={name}>
      <Link activeClassName="isActive" to={path} exact={exact ? exact : false}>
        {name}
      </Link>
    </li>
  ))

  return (
    <Nav>
      <Logo/>
      <NavList>{menu}</NavList>
    </Nav>
  )
}

export default Navigation
