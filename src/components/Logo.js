import { Link } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';

import iconLogo from 'assets/icon/icon-logo.svg'

const LogoWrapper = styled.figure`
  img {
    display: block;
    max-width: 6rem;
    height: auto;

    @media (min-width: 768px) {
      max-width: 8rem;
    }
  }
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <img src={`${iconLogo}`} alt="Logo"/>
      </LogoWrapper>
    </Link>
  )
}

export default Logo
