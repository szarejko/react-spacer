import { ModalContWrapper, ModalDescription, ModalImgCont, Title } from './ModalContent.styled'

import React from 'react'

const ModalContent = ({ data }) => {
  return (
    <ModalContWrapper>
      <ModalImgCont>
        <img src={data.links[0].href} alt=''/>
      </ModalImgCont>
      <ModalDescription>
        <Title>{data.data[0].title}</Title>
        <p>{data.data[0].secondary_creator}</p>
        <p>{data.data[0].description}</p>
      </ModalDescription>
    </ModalContWrapper>
  )
}

export default ModalContent
