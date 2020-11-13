import {setColors} from 'components/global/styles'
import styled from 'styled-components';

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  label, input {
    width: max(30%, 20rem);
    margin: 0 auto

  }

  label {
    font-size: 15px;
    margin-bottom: .5rem;
    color: ${setColors.black};
  }

  input {
    border-radius: 3px;
    border: none;
    height: 2.5rem;
  }
`;
