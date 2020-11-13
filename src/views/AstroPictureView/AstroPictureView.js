import { PictureBox } from 'components/index'
import { PictureBoxWrapper } from "./AstroPictureView.styled";
import React from 'react'

const API_URL_APOD = 'https://api.nasa.gov/planetary/apod?api_key=obhXZx8NW2EhzDLTC5ARefUMQA8lNtYRaHNdW8hn'

const AstroPictureView = () => {
  return (
    <PictureBoxWrapper>
      <PictureBox api={API_URL_APOD}/>
    </PictureBoxWrapper>
  )
}

export default AstroPictureView
