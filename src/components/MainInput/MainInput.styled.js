import { setBreakpoints, setColors } from 'components/global/styles'

import iconSearch from 'assets/icons/icon-search.png'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  padding: 2px;
  margin: 2rem 0 3rem;

  @media (min-width: ${setBreakpoints.tablet}) {
    margin: 8rem 0 5rem;
  }
`

export const InputInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.6rem;
`

export const Input = styled.input`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 3.5rem;
  padding-left: 3.5rem;
  border: 0;
  font-size: 18px;
  text-align: center;
  transition: all 0.5s;
  background: none;

  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.background};

  &:focus,
  &:active {
    outline: none;
    border: 1px solid;
    border-color: ${({ validation }) => (validation ? `${setColors.green}` : `${setColors.red}`)};
    caret-color: ${({ theme }) => theme.textColor};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

export const InputButton = styled.button`
  border: none;
  width: 3.5rem;
  background: url(${iconSearch}), ${({ theme }) => theme.background};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 55%;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 0.2rem;

  &:hover {
    opacity: 0.3;
  }
`

export const InputErrorMsg = styled.span`
  color: ${setColors.red};
  display: inline-block;
  font-size: 12px;

  @media (min-width: ${setBreakpoints.tablet}) {
    font-size: 13px;
  }
`
