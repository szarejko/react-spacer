import { API_URL } from 'api'
import { SearchResults, HeroClaim, SearchInput } from 'components/index'
import React, { useState } from 'react'
import styled from 'styled-components'

import bg_img from 'assets/bg/bg-rocket.jpg'
import debounce from 'lodash.debounce'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 30px;
  height: 100vh;
  width: 100%;
  background-image: url('${bg_img}');
  background-size: cover;
  background-position: 50% 00%;
  background-repeat: no-repeat;
`

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [fetchData, setFetchData] = useState([])

  const handleSearchInput = (e) => {
    const getDataFromAPI = debounce(
      () =>
        fetch(`${API_URL}?q=${inputValue}&media_type=image`)
          .then((response) => response.json())
          .then((response) => {
            setFetchData(response.collection.items)
          })
          .catch((err) => {
            console.log('Data download error', err)
          }),
      500,
    )
    setInputValue(e.target.value)
    getDataFromAPI()
  }

  return (
    <Wrapper>
      <HeroClaim/>
      <SearchInput change={handleSearchInput} value={inputValue}/>
      <SearchResults data={fetchData} />
    </Wrapper>
  )
}

export default Search
