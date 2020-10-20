import { InnerWrapper, Wrapper } from 'components/global/Wrapper'

import React from 'react'
import { setBreakpoints } from 'styles'
import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 3rem;
  font-size: 25px;

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 30px;
  }
`

const PlainText = styled.p`
  font-size: 15px;
  line-height: 1.4;

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

const About = () => (
  <Wrapper>
    <InnerWrapper>
      <Title>
        Spacer App made in React
        <br /> by Sebastian Szarejko
      </Title>
      <PlainText>
        Based on the idea from the mini-course
        <br />
        <a href='https://www.youtube.com/watch?v=PmlipEkFSOk'>Vue "hello roman"</a>
      </PlainText>
    </InnerWrapper>
  </Wrapper>
)

export default About
