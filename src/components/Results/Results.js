import * as styled from './Results.styled'

import React, { useContext, useMemo, useState } from 'react'

import { LoadMoreButton } from 'components/global/LoadMoreButton/LoadMoreButton'
import ModalContext from 'context/ModalContext'

const RESULTS_ERROR_MSG = 'No results found, try again!'

const Results = ({ data, input }) => {
  const [setShowModal, handleGetData, handleGetAllData] = useContext(ModalContext)
  const [visible, setVisible] = useState(6)

  const loadMore = () => {
    setVisible((prevState) => prevState + 6)
  }

  const resultsList = useMemo(
    () =>
      data.slice(0, visible).map((item) => (
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
      )),
    [data, handleGetAllData, handleGetData, setShowModal, visible],
  )

  return data.length !== 0 ? (
    <>
      <styled.ResultsList>{resultsList}</styled.ResultsList>
      {visible < data.length && <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>}
    </>
  ) : (
    !!input.length && <h1>{RESULTS_ERROR_MSG}</h1>
  )
}

export default Results
