import { createGlobalStyle } from 'styled-components'

import FontFaces from './fonts'

const RootStyle = createGlobalStyle`
    ${FontFaces}

    body {
        background: #111;
        color: #fff;
        font-family: 'Roboto Condensed';
    }

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
        height: 100%;
    }

    input, button {
        padding: 0;
        appearance: none;
        border: none;
        background: transparent;
    }

    h1 {
        font: inherit;
        margin: 0;
    }

    input {
        cursor: pointer;
        
        &:focus {
            outline: none;
        }
    }

    button {
        cursor: pointer;
        color: inherit;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
    }


    ::-webkit-scrollbar {
    width: 7px;
    background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: #111;
        opacity: 0.5;
    }
`

export default RootStyle
