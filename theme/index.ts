// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import LinkStyles from 'theme/linkStyles'
import { Color } from './colorStyles'
import { HeadingStyles, TextStyles, Fonts } from './typographyStyles'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: Fonts,
  colors: {
    ...Color,
  },
  components: {
    Box: {
      borderWidth: '2px',
      borderColor: 'pink',
    },
    Link: LinkStyles,
    Heading: HeadingStyles,
    Text: TextStyles,
  },
  styles: {
    global: ({ colorMode }: { colorMode: string }) => {
      return {
        body: {
          color: colorMode === 'dark' ? 'gray.100' : 'gray.900',
          bg: colorMode === 'dark' ? 'gray.900' : 'gray.100',
        },
        '*::placeholder': {
          color: colorMode === 'dark' ? 'gray.100' : 'gray.900',
        },
        '*, *::before, &::after': {
          borderColor: colorMode === 'dark' ? 'gray.100' : 'gray.900',
        },
      }
    },
  },
})

export default theme
