import { setBreakpoints, setColors, setShadow } from 'components/global/styles'

import styled from 'styled-components'

export const PictureWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const PictureImgWrapper = styled.figure`
  width: 100%;
  padding: 1rem 2rem;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    max-height: 55rem;
    display: block;
    box-shadow: ${setShadow.second};
    border-radius: 5px;
    margin: 0 auto;

    @media (min-width: ${setBreakpoints.tablet}) {
    }
  }
`

export const PictureText = styled.h3`
  color: ${setColors.primaryColor};
  font-size: 12px;
  font-weight: 300;
  padding: 1rem 0;
`

export const Loader = styled.div`
  color: ${setColors.primaryColor};
  text-align: center;
  z-index: 10;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
