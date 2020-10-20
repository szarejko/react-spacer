import React from 'react'
import bg_img from 'assets/bg/bg-rocket.jpg'
import { setColors } from 'styles'
import styled from 'styled-components'

const HeroImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('${({img}) => img || bg_img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 00%;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(${setColors.black}, 0.2);
  }
`

const HeroImage = () => <HeroImg />

export default HeroImage
