import { setBreakpoints, setColors, setShadow } from 'components/globals/styles'

import { CloseBtn } from 'components/globals/Button'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${setColors.pale};
  padding: 2rem;
  border: 1px solid ${setColors.grey};
  box-shadow: ${setShadow.main};
  width: 95%;
  translate: all 0.5s;
  border-radius: 5px;
  z-index: 99;

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 80%;
  }
`

const ModalInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${setBreakpoints.tablet}) {
    flex-direction: row;
  }

  figure {
    width: 100%;
    margin-bottom: 2rem;

    @media (min-width: ${setBreakpoints.tablet}) {
      width: 50%;
      margin: 0 1.5rem 0 0;
    }
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

  h2 {
    margin-bottom: 2rem;
  }
`

const Modal = ({ toggleModal, show }) => {
  const content = show && (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={toggleModal}>&Chi;</CloseBtn>
        <ModalInnerWrapper>
          <figure>
            <img src='https://dummyimage.com/600x400/000/fff' alt='' />
          </figure>
          <ModalDescription>
            <h2>test</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugit quasi. Aliquid
              aperiam fugit sequi!
            </p>
          </ModalDescription>
        </ModalInnerWrapper>
      </ModalContent>
    </ModalOverlay>
  )

  return createPortal(content, document.getElementById('modal-root'))
}

export default Modal
