import { IcoButton } from './IconButton.styled'
import React from 'react'

const IconButton = ({ children, icon, ...props }) => {
  return (
    <IcoButton {...props}>
      <img src={icon} alt='' />
      {children}
    </IcoButton>
  )
}

export default IconButton
