import { HeroClaim, HeroImg, MainInput, Results } from 'components/index'
import React, { useState } from 'react'

import { SearchWrapper } from './SearchView.styled'
import Spinner from 'components/global/Spinner'

const API_URL = 'https://images-api.nasa.gov/search'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [fetchData, setFetchData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(0)
  const [isValid, setIsValid] = useState(false)

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
    handleValidation(e)
  }

  const handleValidation = (e) => {
    e.target.value.length < 3 ? setIsValid(false) : setIsValid(true)
  }

  const handleSearchInput = (e) => {
    if (isValid) {
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
            throw new Error('Data download error', err)
          })
      }
    }
  }

  const hero =
    step === 0 ? (
      <>
        <HeroImg />
        <HeroClaim />
      </>
    ) : null

  const result = fetchData && !isLoading && step === 1 ? <Results data={fetchData} input={inputValue} /> : null

  return (
    <SearchWrapper flexStart={step === 1}>
      {hero}
      <MainInput
        handleSearch={handleSearchInput}
        change={handleInputValue}
        value={inputValue}
        theme={step === 1}
        validation={isValid}
      />
      {result}
      {isLoading && <Spinner />}
    </SearchWrapper>
  )
}

export default Search
