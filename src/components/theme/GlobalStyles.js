import { createGlobalStyle } from 'styled-components'
import { setFontFamily } from 'components/globals/styles'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
}

body {
  font-family: ${setFontFamily.fontPrimary};
  font-size: 16px;
}
`
