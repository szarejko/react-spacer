import * as styled from './LoadMoreButton.styled.js'

import React from 'react'

const LoadMoreButton = ({ children, ...props }) => (
  <styled.LoadButton {...props}>
    {children}
  </styled.LoadButton>
)

export default LoadMoreButton
