import { HeroClaim, SearchInput, SearchResults } from 'components/index'
import React, { useState } from 'react'

import { API_URL } from 'api'
import HeroBg from 'components/HeroImage'
import debounce from 'lodash.debounce'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 3rem;
  min-height: 100vh;
  width: 100%;
`

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [fetchData, setFetchData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleSearchInput = (e) => {
    setIsLoading(true)

    const getDataFromAPI = debounce(
      () =>
        fetch(`${API_URL}?q=${inputValue}&media_type=image`)
          .then((response) => response.json())
          .then((response) => {
            setFetchData(response.collection.items)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log('Data download error', err)
          }),
      800,
    )
    setInputValue(e.target.value)
    getDataFromAPI()
  }

  const Hero = isLoading ? (
    <>
      <HeroBg />
      <HeroClaim />
    </>
  ) : null

  return (
    <Wrapper>
      {Hero}
      <SearchInput change={handleSearchInput} value={inputValue} theme={isLoading}  />
      <SearchResults data={fetchData} />
    </Wrapper>
  )
}

export default Search
