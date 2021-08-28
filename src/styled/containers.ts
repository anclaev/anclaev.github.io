import styled from "styled-components"

export const StyledSocial = styled.div`
  position: absolute;
  left: calc(3.333rem - 18px);
  bottom: calc(2.917rem - 25px);
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: 992px) {
    display: none;
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

export const StyledMenu = styled.div``
