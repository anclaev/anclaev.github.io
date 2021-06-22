import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  font-size: 18px;
  margin: 3.5em 0;
  overflow: visible;
`

export const StyledSocial = styled.div`
  position: fixed;
  font-size: 18px;
  bottom: 3.5em;
  display: flex;
  flex-direction: column-reverse;

  & > a:not(:first-child) {
    margin-bottom: 2em;
  }
`
