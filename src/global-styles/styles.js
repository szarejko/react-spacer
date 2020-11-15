export const setBreakpoints = {
  tablet: '768px',
  desktop: '1024px',
}

export const setFontFamily = {
  fontPrimary: '"Roboto", "sans-serif"',
}

export const setColors = {
  primaryColor: 'rgb(255, 255, 255)',
  secondaryColor: 'rgb(104,104,104)',
  linkColor: 'rgb(168,106,32)',
  pale: 'rgb(220,220,220)',
  black: 'rgb(0, 0, 0)',
  grey: `rgb(128,128,128)`,
  yellow: `rgb(236, 159, 5)`,
  red: `rgb(255, 78, 0)`,
  green: `rgb(0, 230, 64)`,
  whiteLightTransparent: 'rgba(255, 255, 255, .2)',
  whiteTransparent: 'rgba(255, 255, 255, .8)',
  blackLightTransparent: 'rgba(0, 0, 0, .1)',
  blackTransparent: 'rgba(0, 0, 0, .4)',
}

export const setGradient = {
  main: `linear-gradient(315deg, ${setColors.red} 0%, ${setColors.yellow} 65%);`,
}

export const setShadow = {
  main: `0 .4rem .8rem 0 rgba(${setColors.black}, 0.2), 0 .6rem 2rem 0 rgba(${setColors.black}, 0.2);`,
  second: `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;`,
}
