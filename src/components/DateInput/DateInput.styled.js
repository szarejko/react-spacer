import { setColors } from 'global-styles/styles'
import styled from 'styled-components'

const INPUT_MAX_WIDTH = {
  width: 'max(20%, 20rem)',
  margin: '0 auto',
}

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  label {
    ${INPUT_MAX_WIDTH};
    font-size: 15px;
    margin-bottom: 0.5rem;
    color: ${setColors.black};
  }

  input {
    ${INPUT_MAX_WIDTH};
    border-radius: 3px;
    border: none;
    height: 2.5rem;
  }
`
