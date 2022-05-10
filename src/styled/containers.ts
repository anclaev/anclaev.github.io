import styled from 'styled-components'

import { IMenu } from '../types/containers.types'

export const StyledSocial = styled.div<IMenu>`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;

  left: calc(3.333rem - 18px);
  bottom: calc(2.917rem - 25px);

  z-index: 7;

  & path {
    fill: ${(props) => (props.status ? '#000' : '#fff')} !important;
  }

  @media (max-width: 992px) {
    flex-direction: row;
    justify-content: center;

    left: calc(2.333rem - 18px);
    right: calc(2.333rem - 18px);

    bottom: calc(1.917rem - 25px);

    z-index: 5;
  }
`

export const StyledHeader = styled.header`
  position: absolute;
  left: 3.333rem;
  top: 2.917rem;
  right: 3.333rem;
  height: 18px;
  overflow: visible;
  display: flex;

  @media (max-width: 992px) {
    left: 1.25rem;
    top: 1.667rem;
    right: 1.25rem;
  }

  & svg {
    mix-blend-mode: difference;
    z-index: 7;
  }
`

export const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7.083rem 12.5%;

  @media (max-width: 992px) {
    padding: 1.667rem 1.25rem;
  }
`

export const StyledMenu = styled.div<IMenu>`
  position: fixed;
  z-index: 6;

  display: flex;
  flex-direction: row;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: ${(props) => (props.status ? '100%' : 0)};

  transition: 0.7s;
  background: #fff;
  color: #000;

  &,
  & > div {
    overflow: hidden;
  }

  & > div {
    // position: relative;
  }

  & > div {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 7rem 12.5%;
  }

  & > div::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 992px) {
    &,
    & > div {
      display: flex;
      flex-direction: column;
    }

    & > div {
      flex: 1 1;
      // justify-content: center;
      padding: 3rem 1.25rem;
    }

    & > div > h2 {
      font-size: 1em;
      margin-bottom: 1em;
      min-height: 40px;
    }
  }
`
