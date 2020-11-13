import { Loader, PictureImgWrapper, PictureText, PictureWrapper } from './PictureBox.styled'

import React from 'react'
import { useFetch } from 'components/hooks/useFetch'

const PictureBox = ({ api }) => {
  const res = useFetch(`${api}`, {})

  if (!res.response) {
    return <div>Loading...</div>
  }

  const resTitle = res.response.title
  const resUrl = res.response.url
  const resImgDate = res.response.date
  const resCopy = res.response.copyright

  return !res.response ? (
    <Loader>Loading...</Loader>
  ) : (
    <PictureWrapper>
      <PictureImgWrapper>
        <PictureText>Astronomy Picture of the Day: {resImgDate}</PictureText>
        <img src={resUrl} alt={resTitle} />
        <PictureText>&copy; {resCopy}</PictureText>
      </PictureImgWrapper>
    </PictureWrapper>
  )
}

export default PictureBox
