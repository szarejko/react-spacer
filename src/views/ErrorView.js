import { AboutInnerWrapper, AboutWrapper, Title } from 'views/AboutView'

import React from 'react'

const ErrorView = () => (
  <AboutWrapper>
    <AboutInnerWrapper>
      <Title>
        Page Not Found.
        <br /> Error 404
      </Title>
    </AboutInnerWrapper>
  </AboutWrapper>
)

export default ErrorView
