import React from 'react'
import styled from 'styled-components'

export const AboutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978 100%
  );
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

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const PlainText = styled.p`
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
      <PlainText>
        Based on the idea from the mini-course
        <br />
        <a href='https://www.youtube.com/watch?v=PmlipEkFSOk'>Vue "hello roman"</a>
      </PlainText>
    </AboutInnerWrapper>
  </AboutWrapper>
)

export default About
