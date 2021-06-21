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
        background: #111;
        color: #fff;
    }

    .container {
        position: relative;
        padding: 0 80px;
        height: 100%;
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
`

export default RootStyle
