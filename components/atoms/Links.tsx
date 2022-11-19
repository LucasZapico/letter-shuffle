import { chakra } from '@chakra-ui/react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

const MagicLinkStyles = {
  baseStyle: {
    transition: 'all 0.15s ease-out',
    cursor: 'pointer',
    textDecoration: 'underline',
    outline: 'none',

    color: 'inherit',
    _hover: {
      textDecoration: 'underline',
    },
    _focus: {
      boxShadow: 'outline',
    },
  },
  variants: {
    navLink: {
      color: 'red.300',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '.5rem',
      paddingBottom: '.5rem',
      _hover: {
        color: 'red.200',
      },
      _active: {
        color: 'red.400',
      },
      _focus: {
        color: 'red.500',
      },
    },
  },
}

// wrap the NextLink with Chakra UI's factory function
const MagicLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  // ensure that you're forwarding all of the required props for your case

  baseStyle: {
    transition: 'all 0.15s ease-out',
    cursor: 'pointer',
    textDecoration: 'underline',
    outline: 'none',
    color: 'inherit',
    _hover: {
      textDecoration: 'underline',
    },
    _focus: {
      boxShadow: 'outline',
    },
  },
  variants: {
    navLink: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === 'dark' ? 'red.200' : 'red.400',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '.5rem',
      paddingBottom: '.5rem',
      _hover: {
        color: 'red.200',
      },
      _active: {
        color: 'red.400',
      },
      _focus: {
        color: 'red.500',
      },
    }),
  },

  shouldForwardProp: (prop) =>
    ['href', 'target', 'children'].includes(prop),
})

export default MagicLink
