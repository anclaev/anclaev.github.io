import styled, { css } from 'styled-components'

export const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left 0;
  width: 5px;
  height: 5px;
  z-index: 100;
  mix-blend-mode: difference;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255, 0.5);
  background: #fff;
  transition: width .3s, height .3s, background .3s;
  pointer-events: none;

  &[data-status=true] {
    width: 100px;
    height: 100px;
    background: transparent;
  }
`

export const StyledBackground = styled.div<{ transparency: string }>`
  position: fixed;
  overflow: hidden;
  z-index: -7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > video,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > video {
    width: 100%;
    height: 100%;
  }

  &:after {
    content: '';
    background: #000;
    opacity: ${(props) => props.transparency};
    bottom: 0;
    right: 0;
  }

  @media (min-aspect-ratio: 16/9) {
    & > video {
      height: 300%;
      top: -100%;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    & > video {
      width: 300%;
      left: -100%;
    }
  }

  @supports (object-fit: cover) {
    & > video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const StyledLogo = styled.svg`
  width: 111px;
  height: 22px;
  path {
    mix-blend-mode: difference;
  }
`

export const StyledMenuWrapper = styled.button`
  position: absolute;
  overflow: visible;
  padding: 10px 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledMenuIcon = styled.div<{ status: boolean }>`
  position: relative;
  overflow: visible;

  & > span {
    display: block;
    width: 50px;
    height: 1px;
    background: #fff;
    transition: 0.2s;

    ${(props) =>
      props.status
        ? css`
            &:first-child {
              transform: rotate(45deg) translateX(1px);
            }

            &:last-child {
              transform: rotate(-45deg) translateX(1px);
            }
          `
        : ''}

    &:nth-child(2) {
      margin: ${(props) => (props.status ? '0' : '7px 0')};
      ${(props) =>
        props.status
          ? css`
              opacity: 0;
            `
          : ''}
    }
  }
`

export const StyledSocialLink = styled.a`
  padding: 10px;
  overflow: visible;

  & > svg path {
    fill: #fff;
    mix-blend-mode: difference;
  }
`
