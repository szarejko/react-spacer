import { HeroClaim, HeroImg, Input, Results } from 'components/index'
import React, { useState } from 'react'

import Spinner from 'components/global/Spinner'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.flexStart ? 'flex-start' : 'center')};
  margin: 0;
  padding: 3rem;
  min-height: 100vh;
  width: 100%;
`

const API_URL = 'https://images-api.nasa.gov/search'

const Search = () => {
  const [inputValue, setInputValue] = useState('hyperion')
  const [fetchData, setFetchData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(0)

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearchInput = (e) => {
    if (e.key === 'Enter' || e.type === 'mousedown') {
      setIsLoading(true)

      fetch(`${API_URL}?q=${inputValue}&media_type=image`)
        .then((response) => response.json())
        .then((response) => {
          setFetchData(response.collection.items)
          setIsLoading(false)
          setStep(1)
        })
        .catch((err) => {
          setIsLoading(false)
          console.warn('Data download error', err)
        })
    }
  }

  const Hero =
    step === 0 ? (
      <>
        <HeroImg />
        <HeroClaim />
      </>
    ) : null

  const Result = fetchData && !isLoading && step === 1 ? <Results data={fetchData} /> : null

  return (
    <SearchWrapper flexStart={step === 1}>
      {Hero}
      <Input
        handleSearch={handleSearchInput}
        change={handleInputValue}
        value={inputValue}
        theme={step === 1}
      />
      {Result}
      {isLoading && <Spinner />}
    </SearchWrapper>
  )
}

export default Search
