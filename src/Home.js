import { Navigation } from 'components/index'
import React from 'react'

const Home = ({ children }) => {
  return (
    <>
      <Navigation />
      <section>{children}</section>
    </>
  )
}

export default Home
