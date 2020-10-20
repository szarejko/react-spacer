import { HeroClaim, HeroImg, Item, SearchInput } from 'components/index'
import React, { useState } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
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
  const [inputValue, setInputValue] = useState('moon')
  const [fetchData, setFetchData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(0)

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearchInput = (e) => {
    setIsLoading(true)

    if (e.key === 'Enter') {
      fetch(`${API_URL}?q=${inputValue}&media_type=image`)
        .then((response) => response.json())
        .then((response) => {
          setFetchData(response.collection.items)
          setIsLoading(false)
          setStep(1)
        })
        .catch((err) => {
          setIsLoading(false)
          console.log('Data download error', err)
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

  const Result = fetchData && !isLoading && step === 1 ? <Item data={fetchData} /> : null

  return (
    <Wrapper flexStart={step === 1}>
      {Hero}
      <SearchInput
        keyPress={handleSearchInput}
        change={handleInputValue}
        value={inputValue}
        theme={step === 1}
      />
      {Result}
    </Wrapper>
  )
}

export default Search
