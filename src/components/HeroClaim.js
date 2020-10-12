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
  font-size: 5rem;
  font-weight: 700;
`;

const SubClaim = styled.p`
  margin-top: 20px;
  font-size: 1.5rem;
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
