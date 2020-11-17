import * as styled from './PictureBox.styled'

import { DateInput, IconButton } from 'components/index'
import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player/youtube'
import favoriteFolderIco from 'assets/icons/icon-favorite-folder.png'
import favoriteIco from 'assets/icons/icon-favorite.png'
import { useFetch } from 'hooks/useFetch/useFetch'

const CURRENT_DATE = new Date().toISOString().split('T')[0]
const API_URL_APOD =
  'https://api.nasa.gov/planetary/apod?api_key=obhXZx8NW2EhzDLTC5ARefUMQA8lNtYRaHNdW8hn&'

const PictureBox = () => {
  const [date, setDate] = useState(CURRENT_DATE)
  const [favorite, setFavorite] = useState('')

  const GET_LOCAL_STORAGE = localStorage.getItem('favoritePhoto')

  useEffect(() => {
    localStorage.setItem('favoritePhoto', favorite)
  }, [favorite])

  const showFavorite = () => {
    setDate(GET_LOCAL_STORAGE)
  }

  const handleInputValue = (e) => {
    setDate(e.target.value)
  }

  const res = useFetch(`${API_URL_APOD}date=${date}`, {})

  if (!res.response) {
    return null
  }

  const resTitle = res.response.title
  const resUrl = res.response.url
  const resImgDate = res.response.date

  const loader = res.isLoading && <styled.Loader>Loading...</styled.Loader>

  const dataSource = /\.(gif|jpg|jpeg|png)$/i.test(resUrl) ? (
    <img src={resUrl} alt={resTitle} />
  ) : (
    <div>
      <ReactPlayer url={resUrl} />
    </div>
  )

  return (
    <>
      <DateInput date={date} startDate={CURRENT_DATE} change={handleInputValue} />
      <styled.PictureWrapper>
        {loader}
        <styled.PictureImgWrapper>
          <styled.PictureText>APOTD from: {resImgDate}</styled.PictureText>
          {dataSource}
        </styled.PictureImgWrapper>
      </styled.PictureWrapper>
      <styled.PictureWrapperButtons>
        <IconButton icon={favoriteIco} onClick={() => setFavorite(resImgDate)}>
          add to favorite
        </IconButton>
        <IconButton icon={favoriteFolderIco} onClick={() => showFavorite()}>
          show favorite
        </IconButton>
      </styled.PictureWrapperButtons>
    </>
  )
}

export default PictureBox
