import { setColors, setShadow } from 'components/globals/styles'

import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

export const ModalOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
  overflow: auto;
  background-color: ${setColors.blackTransparent};
`

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${setColors.pale};
  padding: 2rem;
  border: 1px solid ${setColors.grey};
  box-shadow: ${setShadow.main};
  width: 70%;
  translate: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 99;
`

export const CloseBtn = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin-bottom: 3rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border: 1px solid ${setColors.grey};
  border-radius: 0.6rem;

  &:hover {
    transition: color 0.3s ease-in-out;
    border-color: ${setColors.blackTransparent};
    color: ${setColors.blackTransparent};
  }
`

const Modal = ({ children, toggleModal, show }) => {
  const content = show && (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={toggleModal}>&Chi;</CloseBtn>
        {children}
      </ModalContent>
    </ModalOverlay>
  )

  return createPortal(content, document.getElementById('modal-root'))
}

export default Modal
