import { Loader, PictureImgWrapper, PictureText, PictureWrapper } from './PictureBox.styled'
import React, { useState } from 'react'

import { DateInput } from 'components/index'
import IconButton from '../global/IconButton/IconButton'
import favoriteFolderIco from '../../assets/icons/icon-favorite-folder.png'
import favoriteIco from '../../assets/icons/icon-favorite.png'
import { useFetch } from 'components/hooks/useFetch'

const API_URL_APOD =
  'https://api.nasa.gov/planetary/apod?api_key=obhXZx8NW2EhzDLTC5ARefUMQA8lNtYRaHNdW8hn&'

const API_START_DATE = new Date().toISOString().split('T')[0]

const PictureBox = () => {
  const [date, setDate] = useState(API_START_DATE)

  const handleInputValue = (e) => setDate(e.target.value)

  const res = useFetch(`${API_URL_APOD}date=${date}`, {})

  if (!res.response) {
    return null
  }

  const resTitle = res.response.title
  const resUrl = res.response.url
  const resImgDate = res.response.date

  const loader = res.isLoading && <Loader>Loading...</Loader>

  return (
    <>
      <DateInput date={date} startDate={API_START_DATE} change={handleInputValue} />
      <PictureWrapper>
        {loader}
        <PictureImgWrapper>
          <PictureText>Astronomy Picture of the Day: {resImgDate}</PictureText>
          <img src={resUrl} alt={resTitle} />
        </PictureImgWrapper>
      </PictureWrapper>
      <div>
        <IconButton icon={favoriteIco}>add to favorite</IconButton>
        <IconButton icon={favoriteFolderIco}>show favorite</IconButton>
      </div>
    </>
  )
}

export default PictureBox
