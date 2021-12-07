import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        font-family: 'Montserrat',sans-serif;
        scroll-behavior: smooth;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    h2 {
        font-size: 4rem;
        font-weight: 500;
    }

`

export default GlobalStyle;