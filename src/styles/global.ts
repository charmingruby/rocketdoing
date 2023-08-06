import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['gray-600']};
        color: ${(props) => props.theme['gray-100']};
        -webkite-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Inter, sans-serif;
    }
`
