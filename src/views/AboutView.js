import { setBreakpoints, setGradient } from 'styles'

import React from 'react'
import styled from 'styled-components'

export const AboutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: ${setGradient.main}
`

export const AboutInnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
`

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
  <AboutWrapper>
    <AboutInnerWrapper>
      <Title>
        Spacer App made in React
        <br /> by Sebastian Szarejko
      </Title>
      <PlainText>
        Based on the idea from the mini-course
        <br />
        <a href='https://www.youtube.com/watch?v=PmlipEkFSOk'>Vue "hello roman"</a>
      </PlainText>
    </AboutInnerWrapper>
  </AboutWrapper>
)

export default About
