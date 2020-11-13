import React from 'react'

const IconButton = ({children, icon}) => {
  return (
    <>
      <button>
        <img src={icon} alt='' />
        {children}
      </button>
    </>
  )
}

export default IconButton
