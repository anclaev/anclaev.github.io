import { css } from 'styled-components'
const FontFaces = css`
  @font-face {
    font-family: 'Bebas Neue';
    src: url('fonts/Bebas/_.eot');
    src: url('fonts/Bebas/_.eot?#iefix') format('embedded-opentype'),
      url('fonts/Bebas/_.woff2') format('woff2'),
      url('fonts/Bebas/_.woff') format('woff'),
      url('fonts/Bebas/_.ttf') format('truetype'),
      url('fonts/Bebas/_.svg#BebasNeueCyrillic') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Condensed';
    src: url('fonts/Roboto/_.eot');
    src: url('fonts/Roboto/_.eot?#iefix') format('embedded-opentype'),
      url('fonts/Roboto/_.woff2') format('woff2'),
      url('fonts/Roboto/_.woff') format('woff'),
      url('fonts/Roboto/_.ttf') format('truetype'),
      url('fonts/Roboto/_.svg#BebasNeueCyrillic') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

export default FontFaces
