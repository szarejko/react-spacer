import { setGradient } from 'components/global/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: ${setGradient.main};
`

export const InnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
`
