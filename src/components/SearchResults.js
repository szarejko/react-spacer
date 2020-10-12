import React from 'react'

const SearchResults = ({ data }) => {
  const resultsList = data.map((item) => (
    <li key={item.data[0].nasa_id}>
      <p>{item.data[0].description}</p>
    </li>
  ))

  return <ul>{resultsList}</ul>
}

export default SearchResults
