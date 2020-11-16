import * as styled from './Navigation.styled'

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
      <styled.Link activeClassName='isActive' to={path} exact={exact ? exact : false}>
        {name}
      </styled.Link>
    </li>
  ))

  return (
    <styled.Nav>
      <Logo />
      <styled.NavList>{menu}</styled.NavList>
    </styled.Nav>
  )
}

export default Navigation
