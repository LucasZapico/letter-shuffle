import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import { MobileNav, DarkModeSwitch, MagicLink } from 'components'
import { generate } from 'shortid'
import { mainLinks } from 'meta/navLinks'
import siteMetaData from 'meta/siteMetaData'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from 'components/assets/svg/letter-scramble-hor-dark'

/**
 * TODO: create next chakra link that doesn't next a tags
 * https://chakra-ui.com/docs/components/link/usage#nextjs-13
 * TODO: discovery MagicLink variant???
 * TODO: watch, if height is added to logo their may be a type erro
 */

const Nav = ({ colorMode, router, ...rest }) => {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      justifyContent="flex-end"
      flexGrow="1"
    >
      {mainLinks.map((link) => {
        return (
          <MagicLink
            // variant="navLink"
            // color={isActive ? 'red.200' : 'red.300'}
            pr={2}
            pl={2}
            pt={1}
            pb={1}
            key={generate()}
            href={link.path}
          >
            {link.name}
          </MagicLink>
        )
      })}
    </Flex>
  )
}

const NavContainer = ({ ...rest }) => {
  const { colorMode } = useColorMode()
  const router = useRouter()
  const isActive = router.pathname === '/'
  return (
    <Flex paddingTop=".3rem" px="1rem" justifyContent="space-between" {...rest}>
      <MagicLink key={generate()} href={'/'} passHref>
        {/* <Logo
          width={{ base: '150px', md: '200px' }}
          color={colorMode === 'dark' ? '#ffffff' : '#000000'}
        /> */}
        Home
      </MagicLink>
      <Nav colorMode={colorMode} router={router} />
      <MobileNav colorMode={colorMode} router={router} />
      <DarkModeSwitch />
    </Flex>
  )
}

export default NavContainer
