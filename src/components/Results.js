import React, { useContext } from 'react'
import { setBreakpoints, setColors } from 'components/global/styles'

import ModalContext from 'ModalContext'
import styled from 'styled-components'

const List = styled.ul`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: ${setBreakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${setBreakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ListItem = styled.li`
  list-style: none;
  border-radius: 5px;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: sepia(80%);
  }
`

const ListImgWrapper = styled.figure`
  width: 80vw;
  height: 25rem;
  display: inline-block;
  box-shadow: 0 0.8rem 0.6rem -0.8rem ${setColors.black};

  @media (min-width: ${setBreakpoints.tablet}) {
    width: 40vw;
    height: 35rem;
  }

  @media (min-width: ${setBreakpoints.desktop}) {
    width: 25vw;
  }

  img {
    object-fit: cover;
    object-position: 50% 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`

const Results = ({ data }) => {
  const [setShowModal, handleGetData] = useContext(ModalContext)

  const resultsList = data.map((item) => (
    <ListItem
      key={item.data[0].nasa_id}
      onClick={() => {
        setShowModal((prevState) => !prevState)
        handleGetData(item)
      }}
    >
      <ListImgWrapper>
        <img src={item.links[0].href} alt={item.data[0].title} />
      </ListImgWrapper>
    </ListItem>
  ))

  return <List>{resultsList}</List>
}

export default Results
