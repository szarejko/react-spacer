import { setBreakpoints } from 'components/global/styles'
import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.flexStart ? 'flex-start' : 'center')};
  margin: 0;
  padding: 3rem;
  min-height: calc(100vh - 55px);
  width: 100%;

  @media (min-width: ${setBreakpoints.tablet}) {
    min-height: calc(100vh - 100px);
  }
`
