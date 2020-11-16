import * as styled from './Results.styled'

import React, { useContext } from 'react'

import ModalContext from 'context/ModalContext'

const RESULTS_ERROR_MSG = 'Wrong search. Please, try again!'

const Results = ({ data, input }) => {
  const [setShowModal, handleGetData, handleGetAllData] = useContext(ModalContext)

  const resultsList = data.map((item) => (
    <styled.ResultsListItem
      key={item.data[0].nasa_id}
      onClick={() => {
        setShowModal((prevState) => !prevState)
        handleGetData(item)
        handleGetAllData(data)
      }}
    >
      <styled.ResultsImgWrapper>
        <img src={item.links[0].href} alt={item.data[0].title} />
      </styled.ResultsImgWrapper>
    </styled.ResultsListItem>
  ))

  return data.length !== 0 ? (
    <styled.ResultsList>{resultsList}</styled.ResultsList>
  ) : (
    !!input.lengthh && <h1>{RESULTS_ERROR_MSG}</h1>
  )
}

export default Results
