import { createGlobalStyle } from 'styled-components'
import { setFontFamily } from 'global-styles/styles'

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
  height: ${({ isModalOpen }) => (isModalOpen ? '100vh' : null)};
  overflow: ${({ isModalOpen }) => (isModalOpen ? 'auto' : null)};
  overflow-x: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : null)};
  font-family: ${setFontFamily.fontPrimary};
  font-size: 16px;
}
`
