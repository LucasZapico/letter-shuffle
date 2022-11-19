import { Flex, Heading, Box } from '@chakra-ui/react'
import { generate } from 'shortid'
import { mainLinks } from 'meta/navLinks'
import siteMetaData from 'meta/siteMetaData'
import NextLink from 'next/link'
import { SubFooter, MagicLink } from 'components/index'

const Footer = () => {
  return (
    <Box
      minH="500px"
      display={{ base: 'flex' }}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        padding="1rem"
        flexDirection={{ base: 'column', md: 'row' }}
      ></Flex>
      <Flex flexDir={{ base: 'column' }}>
        {mainLinks.map((link) => {
          return (
            <MagicLink
              // variant="navLink"
              key={generate()}
              href={link.path}
            >
              {link.name}
            </MagicLink>
          )
        })}
      </Flex>
      <SubFooter />
    </Box>
  )
}

export default Footer
