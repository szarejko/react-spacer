import * as styled from './Modal.styled'

import React, { useEffect, useState } from 'react'

import { CloseButton } from 'components/global/CloseButton/CloseButton'
import { ModalContent } from 'components/index'
import { createPortal } from 'react-dom'

let index = 0,
  length

const Modal = ({ setModalState, data, allData }) => {
  const [modalData, setModalData] = useState(data)

  const modalDataID = data.data[0].nasa_id
  let dataIndex = allData.findIndex((item) => item.data[0].nasa_id === modalDataID)
  length = allData.length - 1

  useEffect(() => {
    index = dataIndex
  }, [dataIndex])

  const handleToggleModal = () => setModalState((prevState) => !prevState)

  const showPrevPage = () => {
    if (index === 0) return index
    setModalData(allData[(index -= 1)])
  }

  const showNextPage = () => {
    if (index === length) return index
    setModalData(allData[(index += 1)])
  }

  return createPortal(
    <styled.ModalOverlay>
      <styled.ModalWrapper>
        <CloseButton onClick={handleToggleModal}>&Chi;</CloseButton>
        <ModalContent data={modalData} />
        <styled.ModalBtnWrapper>
          <span>
            {index + 1} / {length + 1}
          </span>
          <button onClick={showPrevPage}>&lt; Previous</button>
          <button onClick={showNextPage}>Next &gt;</button>
        </styled.ModalBtnWrapper>
      </styled.ModalWrapper>
    </styled.ModalOverlay>,
    document.getElementById('modal-root'),
  )
}

export default Modal
