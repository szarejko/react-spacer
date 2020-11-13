import styled from 'styled-components'

export const PictureWrapper = styled.div`
  border: 2px solid red;
  width: 100%;
`

export const PictureImgWrapper = styled.figure`
  width: 100%;

  img {
    max-width: 100%;
    display: block;
  }
`

export const PictureText = styled.h3`
  color: white;
  font-size: 12px;
  font-weight: 300;
  padding: 1rem 0;
`

export const Loader = styled.div`
  color: white;
`
