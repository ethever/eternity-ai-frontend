import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { createTheme as createNextUITheme } from '@nextui-org/react'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export const muiUITheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export const nextUITheme = createNextUITheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$red200',
      primaryLightHover: '$red300',
      primaryLightActive: '$red400',
      primaryLightContrast: '$red600',
      primary: 'red',
      primaryRounded: 'red',
      primaryBorder: '$red500',
      primaryBorderHover: '$red600',
      primarySolidHover: '$red700',
      primarySolidContrast: '$white',
      primaryShadow: '$red500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '$red600',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
})
