import { Link, Nav, NavList } from './Navigation.styled'

import Logo from '../Logo/Logo'
import React from 'react'

const menuLinks = [
  { name: 'Home', path: '/', exact: true },
  { name: 'Picture of the day', path: '/apotd' },
  { name: 'About', path: '/about' },
]

const Navigation = () => {
  const menu = menuLinks.map(({ name, path, exact }) => (
    <li key={name}>
      <Link activeClassName='isActive' to={path} exact={exact ? exact : false}>
        {name}
      </Link>
    </li>
  ))

  return (
    <Nav>
      <Logo />
      <NavList>{menu}</NavList>
    </Nav>
  )
}

export default Navigation
