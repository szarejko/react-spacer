import { setBreakpoints, setColors, setShadow } from 'global-styles/styles'

import styled from 'styled-components'

const INPUT_WIDTH = {
  width: 'max(20%, 20rem)',
  margin: '0 auto',
}

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  text-align: center;

  label {
    ${INPUT_WIDTH};
    font-size: 15px;
    margin-bottom: 0.5rem;
    color: ${setColors.black};
  }

  input {
    ${INPUT_WIDTH};
    border-radius: 3px;
    border: none;
    height: 3.5rem;
    font-size: 15px;
    text-align: center;
    border: 0;
    transition: all 0.5s;

    box-shadow: ${setShadow.second};
    background: ${setColors.blackLightTransparent};
    color: ${setColors.primaryColor};

    @media (min-width: ${setBreakpoints.tablet}) {
      font-size: 18px;
    }
  }
`
