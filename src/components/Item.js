import React from 'react'
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListItem = styled.li`
  list-style: none;
`;

const ImgWrapper = styled.figure`
  width: 40vw;
  height: 25rem;
  display: inline-block;

  @media (min-width: 768px) {
    width: 25vw;
  }

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Results = ({ data }) => {
  const resultsList = data.map((item) => (
    <ListItem key={item.data[0].nasa_id}>
      <ImgWrapper>
        <img src={item.links[0].href} alt={item.data[0].title} />
      </ImgWrapper>
    </ListItem>
  ))

  return <List>{resultsList}</List>
}

export default Results
