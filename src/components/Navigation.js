import { NavLink } from 'react-router-dom'
import React from 'react'

const menuLinks = [
  { name: 'home', path: '/', exact: true },
  { name: 'about', path: '/about' },
]

const Navigation = () => {
  const menu = menuLinks.map(({ name, path, exact }) => (
    <li key={name}>
      <NavLink to={path} exact={exact ? exact : false}>
        {name}
      </NavLink>
    </li>
  ))

  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  )
}

export default Navigation
