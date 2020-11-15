import { ModalOverlay, ModalWrapper } from './Modal.styled'

import { CloseButton } from 'components/global/CloseButton/CloseButton'
import { ModalContent } from 'components/index'
import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ setModalState, data }) => {
  const handleToggleModal = () => setModalState((prevState) => !prevState)

  const MODAL_ROOT = document.getElementById('modal-root')

  return createPortal(
    <ModalOverlay>
      <ModalWrapper>
        <CloseButton onClick={handleToggleModal}>&Chi;</CloseButton>
        <ModalContent data={data} />
      </ModalWrapper>
    </ModalOverlay>,
    MODAL_ROOT,
  )
}

export default Modal
