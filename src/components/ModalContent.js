import { setBreakpoints, setColors } from 'components/global/styles'

import React from 'react'
import styled from 'styled-components'

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
`

const Title = styled.h2`
  margin-bottom: 2rem;
`

const ModalContent = () => {
  return (
    <ModalContentWrapper>
      <ImgContainer>
        <img src='https://dummyimage.com/600x400/000/fff' alt='' />
      </ImgContainer>
      <ModalDescription>
        <Title>test</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugit quasi. Aliquid
          aperiam fugit sequi!
        </p>
      </ModalDescription>
    </ModalContentWrapper>
  )
}

export default ModalContent
