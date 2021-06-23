import { createGlobalStyle } from 'styled-components'

import FontFaces from './fonts'

const RootStyle = createGlobalStyle`
    ${FontFaces}

    * {
        box-sizing: border-box;
        overflow-x: hidden;

        &::selection {
            color: #fff;
            background: #111;
        }
    }

    html {
        font-size: 15px;
    }

    body {
        margin: 0;
        height: 1em;
        min-height: 100vh;
        font-family: 'Roboto Condensed';   
        background: #111;
        color: #fff;
    }

    .logo {
        height: inherit;

        & svg {
            height: inherit;
        }

        path {
            mix-blend-mode: difference;
        }
    }

    input, button {
        padding: 0;
        cursor: pointer;
        appearance: none;
        border: none;
        background: transparent;
        color: inherit;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
    }

    input:focus {        
        outline: none;
    }


    h1 {
        font: inherit;
        margin: 0;
    }

    ::-webkit-scrollbar {
    width: 7px;
    background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: #111;
        opacity: 0.5;
    }

    @media (max-width: 1250px) {
        html {
            font-size: 14px;
        }
    }

    @media (max-width: 1120px) {
        html {
            font-size: 13px;
        }
    }

    @media (max-width: 1040px) {
        html {
            font-size: 12px;
        }
    }

    @media (max-width: 992px) {
        html {
            font-size: 24px;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 20px;
        }
    }
`

export default RootStyle
