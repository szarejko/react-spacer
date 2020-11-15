import { InnerWrapper, Wrapper } from 'components/global/Wrapper/Wrapper'

import React from 'react'

const ErrorView = () => (
  <Wrapper>
    <InnerWrapper>
      <h1>
        Page Not Found.
        <br /> Error 404
      </h1>
    </InnerWrapper>
  </Wrapper>
)

export default ErrorView
