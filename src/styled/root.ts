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

    body {
        margin: 0;
        height: 1em;
        min-height: 100vh;
        font-family: 'Roboto Condensed';   
        font-size: 15px;
        background: #111;
        color: #fff;
    }

    .wrapper {
        height: 100%;
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
        body {
            font-size: 14px;
        }
    }

    @media (max-width: 1120px) {
        body {
            font-size: 13px;
        }
    }

    @media (max-width: 1040px) {
        body {
            font-size: 12px;
        }
    }

    @media (max-width: 992px) {
        body {
            font-size: 24px;
        }
    }

    @media (max-width: 320px) {
        body {
            font-size: 20px;
        }
    }
`

export default RootStyle
