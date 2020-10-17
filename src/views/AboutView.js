import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`

const AboutInnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
`

const Title = styled.h1`
  margin-bottom: 3rem;
  font-size: 25px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const Text = styled.p`
  font-size: 15px;
  line-height: 1.4;

  @media (min-width: 768px) {
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
      <Text>
        Based on the idea from the mini-course
        <br />
        <a href='https://www.youtube.com/watch?v=PmlipEkFSOk'>Vue "hello roman"</a>
      </Text>
    </AboutInnerWrapper>
  </AboutWrapper>
)

export default About
