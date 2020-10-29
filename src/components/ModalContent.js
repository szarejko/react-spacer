import { setBreakpoints, setColors } from 'components/global/styles'

import React from 'react'
import styled from 'styled-components'

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${setBreakpoints.tablet}) {
    flex-direction: row;
  }
`

const ImgContainer = styled.figure`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 50%;
    margin: 0 1.5rem 0 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const ModalDescription = styled.div`
  width: 100%;

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 50%;
    padding-left: 1.5rem;
    border-left: 1px solid ${setColors.grey};
  }

  p {
    margin-bottom: 1rem;
  }
`

const Title = styled.h2`
  margin-bottom: 2rem;
`

const ModalContent = ({ data }) => {
  return (
    <ModalContentWrapper>
      <ImgContainer>
        <img src={data.links[0].href} alt='' />
      </ImgContainer>
      <ModalDescription>
        <Title>{data.data[0].title}</Title>
        <p>{data.data[0].secondary_creator}</p>
        <p>{data.data[0].description}</p>
      </ModalDescription>
    </ModalContentWrapper>
  )
}

export default ModalContent
