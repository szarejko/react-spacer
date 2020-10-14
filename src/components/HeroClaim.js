import { primaryColor } from 'variables'
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Claim = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: ${primaryColor};
`;

const SubClaim = styled.p`
  margin-top: 2rem;
  font-size: 15px;
  color: ${primaryColor};
`;

const HeroClaim = () => {
  return (
    <Wrapper>
      <Claim>SPACER</Claim>
      <SubClaim>Begin your journey through our amazing galaxy, and discover places you never heard of.</SubClaim>
      <SubClaim>Type anything space-related to start.</SubClaim>
    </Wrapper>
  )
}

export default HeroClaim
