import { Link } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';

import iconLogo from 'assets/icon/icon-logo.svg'

const ImageWrapper = styled.figure`
  img {
    display: block;
    max-width: 6rem;
    height: auto;
  }
`;

const Logo = () => {
  return (
    <Link to="/">
      <ImageWrapper>
        <img src={`${iconLogo}`} alt="Logo"/>
      </ImageWrapper>
    </Link>
  )
}

export default Logo
