import { css } from 'styled-components'

import BebasEot from '../assets/fonts/Bebas/_.eot'
import BebasWoff2 from '../assets/fonts/Bebas/_.woff2'
import BebasWoff from '../assets/fonts/Bebas/_.woff'
import BebasTtf from '../assets/fonts/Bebas/_.ttf'
import BebasSvg from '../assets/fonts/Bebas/_.svg'

import RobotoEot from '../assets/fonts/Roboto/_.eot'
import RobotoWoff2 from '../assets/fonts/Roboto/_.woff2'
import RobotoWoff from '../assets/fonts/Roboto/_.woff'
import RobotoTtf from '../assets/fonts/Roboto/_.ttf'
import RobotoSvg from '../assets/fonts/Roboto/_.svg'

const FontFaces = css`
  @font-face {
    font-family: 'Bebas Neue';
    src: url('${BebasEot}');
    src: url('${BebasEot}?#iefix') format('embedded-opentype'),
      url('${BebasWoff2}') format('woff2'), url('${BebasWoff}') format('woff'),
      url('${BebasTtf}.ttf') format('truetype'),
      url('${BebasSvg}#BebasNeueCyrillic') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Condensed';
    src: url('${RobotoEot}');
    src: url('${RobotoEot}?#iefix') format('embedded-opentype'),
      url('${RobotoWoff2}') format('woff2'), url('${RobotoWoff}') format('woff'),
      url('${RobotoTtf}.ttf') format('truetype'),
      url('${RobotoSvg}#BebasNeueCyrillic') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

export default FontFaces
