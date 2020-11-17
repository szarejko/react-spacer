import * as styled from './AboutView.styled'

import { InnerWrapper, Wrapper } from 'components/global/Wrapper/Wrapper'

import React from 'react'

const About = () => (
  <Wrapper>
    <InnerWrapper>
      <styled.AboutTitle>
        Spacer App made in React
        <br /> by Sebastian Szarejko
      </styled.AboutTitle>
      <styled.AboutPlainText>
        Based on the idea from the mini-course
        <br />
        <a href='https://www.youtube.com/watch?v=PmlipEkFSOk'>Vue "hello roman"</a>
      </styled.AboutPlainText>
    </InnerWrapper>
  </Wrapper>
)

export default About
