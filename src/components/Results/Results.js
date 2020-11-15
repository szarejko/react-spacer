import React, { useContext } from 'react'
import { ResultsImgWrapper, ResultsList, ResultsListItem } from './Results.styled'

import ModalContext from 'context/ModalContext'

const RESULTS_ERROR_MSG = 'Wrong search. Please, try again!'

const Results = ({ data, input }) => {
  const [setShowModal, handleGetData] = useContext(ModalContext)

  const inputLength = input.length

  const resultsList = data.map((item) => (
    <ResultsListItem
      key={item.data[0].nasa_id}
      onClick={() => {
        setShowModal((prevState) => !prevState)
        handleGetData(item)
      }}
    >
      <ResultsImgWrapper>
        <img src={item.links[0].href} alt={item.data[0].title} />
      </ResultsImgWrapper>
    </ResultsListItem>
  ))

  return data.length !== 0 ? (
    <ResultsList>{resultsList}</ResultsList>
  ) : (
    !!inputLength && <h1>{RESULTS_ERROR_MSG}</h1>
  )
}

export default Results
