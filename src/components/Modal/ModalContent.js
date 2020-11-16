import * as styled from './ModalContent.styled'

import React from 'react'

const ModalContent = ({ data }) => {
  return (
    <styled.ModalContWrapper>
      <styled.ModalContImg>
        <img src={data.links[0].href} alt='' />
      </styled.ModalContImg>
      <styled.ModalContDescription>
        <styled.ModalContTitle>{data.data[0].title}</styled.ModalContTitle>
        <p>{data.data[0].secondary_creator}</p>
        <p>{data.data[0].description}</p>
      </styled.ModalContDescription>
    </styled.ModalContWrapper>
  )
}

export default ModalContent
