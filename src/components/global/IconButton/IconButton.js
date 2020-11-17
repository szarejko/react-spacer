import * as styled from './IconButton.styled'

import React from 'react'

const IconButton = ({ children, icon, ...props }) => {
  return (
    <styled.IcoButton {...props}>
      <img src={icon} alt='' />
      {children}
    </styled.IcoButton>
  )
}

export default IconButton
