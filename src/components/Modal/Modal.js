import { ModalOverlay, ModalWrapper } from './Modal.styled'

import { CloseBtn } from 'components/global/CloseBtn'
import { ModalContent } from 'components/index'
import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ setModalState, data }) => {
  const handleToggleModal = () => setModalState((prevState) => !prevState)

  const MODAL_ROOT = document.getElementById('modal-root')

  return createPortal(
    <ModalOverlay>
      <ModalWrapper>
        <CloseBtn onClick={handleToggleModal}>&Chi;</CloseBtn>
        <ModalContent data={data} />
      </ModalWrapper>
    </ModalOverlay>,
    MODAL_ROOT,
  )
}

export default Modal
