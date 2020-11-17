import { Navigation } from 'components'
import React from 'react'

const TemplateDefault = ({ children }) => {
  return (
    <>
      <Navigation />
      <section>{children}</section>
    </>
  )
}

export default TemplateDefault
