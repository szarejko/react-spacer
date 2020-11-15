import {
  Loader,
  PictureImgWrapper,
  PictureText,
  PictureWrapper,
  PictureWrapperBottom,
} from './PictureBox.styled'
import React, { useEffect, useState } from 'react'

import { DateInput } from 'components/index'
import IconButton from '../global/IconButton/IconButton'
import ReactPlayer from 'react-player/youtube'
import favoriteFolderIco from 'assets/icons/icon-favorite-folder.png'
import favoriteIco from 'assets/icons/icon-favorite.png'
import { useFetch } from 'hooks/useFetch/useFetch'

const API_URL_APOD =
  'https://api.nasa.gov/planetary/apod?api_key=obhXZx8NW2EhzDLTC5ARefUMQA8lNtYRaHNdW8hn&'

const API_START_DATE = new Date().toISOString().split('T')[0]

const GET_STORAGE_PIC = localStorage.getItem('favoritePhoto')

const PictureBox = () => {
  const [date, setDate] = useState(API_START_DATE)
  const [favorite, setFavorite] = useState('')

  useEffect(() => {
    localStorage.setItem('favoritePhoto', favorite)
  }, [favorite])

  const handleInputValue = (e) => setDate(e.target.value)

  const showFavorite = () => {
    setDate(GET_STORAGE_PIC)
  }

  const res = useFetch(`${API_URL_APOD}date=${date}`, {})

  if (!res.response) {
    return null
  }

  const resTitle = res.response.title
  const resUrl = res.response.url
  const resImgDate = res.response.date

  const loader = res.isLoading && <Loader>Loading...</Loader>

  const dataSource = /\.(gif|jpg|jpeg|png)$/i.test(resUrl) ? (
    <img src={resUrl} alt={resTitle} />
  ) : (
    <div>
      <ReactPlayer url={resUrl} />
    </div>
  )

  return (
    <>
      <DateInput date={date} startDate={API_START_DATE} change={handleInputValue} />
      <PictureWrapper>
        {loader}
        <PictureImgWrapper>
          <PictureText>APOTD from: {resImgDate}</PictureText>
          {dataSource}
        </PictureImgWrapper>
      </PictureWrapper>
      <PictureWrapperBottom>
        <IconButton icon={favoriteIco} onClick={() => setFavorite(resImgDate)}>
          add to favorite
        </IconButton>
        <IconButton icon={favoriteFolderIco} onClick={() => showFavorite()}>
          show favorite
        </IconButton>
      </PictureWrapperBottom>
    </>
  )
}

export default PictureBox
