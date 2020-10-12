import { API_URL } from 'api'
import { SearchResults } from 'components/index'
import React, { useState } from 'react'
import styled from 'styled-components'

import debounce from 'lodash.debounce'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
`

const SearchWrapper = styled.label`
  width: 300px;
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
  }
`

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [fetchData, setFetchData] = useState([])

  const handleSearchInput = (e) => {
    setInputValue(e.target.value)

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
    getDataFromAPI()
  }

  return (
    <Wrapper>
      <SearchWrapper>
        <label htmlFor='search'>Search</label>
        <input id='search' type='text' value={inputValue} onChange={handleSearchInput} />
        <SearchResults data={fetchData} />
      </SearchWrapper>
    </Wrapper>
  )
}

export default Search
