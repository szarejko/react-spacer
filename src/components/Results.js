import React from 'react'

const Results = ({ data }) => {
  const resultsList = data.map((item) => (
    <li key={item.data[0].nasa_id}>
      <img src={item.links[0].href} alt={item.data[0].title} />
    </li>
  ))

  return <ul>{resultsList}</ul>
}

export default Results
