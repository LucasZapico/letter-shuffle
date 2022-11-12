import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { DarkModeSwitch } from 'components/atoms/DarkModeToggle'
import { generate } from 'shortid'
import { mainLinks } from 'meta/navLinks'
import siteMetaData from 'meta/siteMetaData'
import NextLink from 'next/link'

const Nav = ({ ...rest }) => {
  return (
    <Flex paddingTop=".3rem" px="1rem" justifyContent="space-between" {...rest}>
      <NextLink key={generate()} href="/" passHref>
        <Link variant="navLink" fontWeight="800">
          logo
        </Link>
      </NextLink>
      <Flex justifyContent="flex-end" flexGrow="1">
        {mainLinks.map((link) => {
          return (
            <NextLink key={generate()} href={link.path} passHref>
              <Link variant="navLink">{link.name}</Link>
            </NextLink>
          )
        })}
      </Flex>
      <DarkModeSwitch />
    </Flex>
  )
}

const MobileNav = ({ ...rest }) => {
  return <Flex {...rest}>Mobile Nav</Flex>
}

export { Nav, MobileNav }
