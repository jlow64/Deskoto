import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Quicksand';
        src: url('/assets/fonts/Quicksand.ttf') format('truetype');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Satisfy';
        src: url('/assets/fonts/Satisfy.ttf') format('truetype');
    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    div {
        display: flex;
    }

`;
