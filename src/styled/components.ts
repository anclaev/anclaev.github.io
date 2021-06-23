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
  border: 1px solid hsla(0,0%,100%,.4);
  background: #fff;
  mix-blend-mode: difference;
  transition: width .3s, height .3s, background .3s;
  pointer-events: none;

  &[data-status=true] {
    width: 50px;
    height: 50px;
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
  padding: 35px 30px;
  overflow: visible;
  position: relative;

  &:hover {
    & svg {
      width: 25px;
      height: 25px;

      path {
        opacity: 0.7;
      }
    }
  }

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
    width: 18px;
    height: 18px;

    & path {
      fill: #fff;
      mix-blend-mode: difference;
      transition: 0.2s;
    }
  }
`

export const StyledPageTitle = styled.div`
  margin-bottom: 1.167rem;
  max-width: 60%;
  white-space: pre-line;

  font-family: 'Bebas Neue';
  text-transform: uppercase;
  font-size: 3.75rem;
  line-height: 1.111111111111111;
  letter-spacing: 0.03rem;

  @media (max-width: 992px) {
    font-size: 1.25rem;
    margin-bottom: 0.667rem;
    max-width: 100%;
    line-height: 1.176470588235294;
  }
`

export const StyledPageSubTitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.416666666666667;

  @media (max-width: 992px) {
    font-size: 0.667rem;
    margin-bottom: 0.667rem;
  }
`
