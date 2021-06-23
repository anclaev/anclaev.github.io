import { css } from 'styled-components'
const FontFaces = css`
  @font-face {
    font-family: 'Bebas Neue';
    src: url('fonts/Bebas.eot');
    src: url('fonts/Bebas.eot?#iefix') format('embedded-opentype'),
      url('media/fonts/Bebas.woff2') format('woff2'),
      url('media/fonts/Bebas.woff') format('woff'),
      url('media/fonts/Bebas.ttf') format('truetype'),
      url('media/fonts/Bebas.svg#BebasNeueCyrillic') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Condensed';
    src: url('media/fonts/Roboto.eot');
    src: url('media/fonts/Roboto.eot?#iefix') format('embedded-opentype'),
      url('media/fonts/Roboto.woff2') format('woff2'),
      url('media/fonts/Roboto.woff') format('woff'),
      url('media/fonts/Roboto.ttf') format('truetype'),
      url('media/fonts/Roboto.svg#Roboto-Condensed') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

export default FontFaces
