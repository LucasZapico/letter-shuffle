import { Flex, Heading, useColorMode, Box } from '@chakra-ui/react'
import { generate } from 'shortid'
import { mainLinks } from 'meta/navLinks'
import siteMetaData from 'meta/siteMetaData'
import NextLink from 'next/link'
import { SubFooter, MagicLink } from 'components/index'
import Logo from 'components/assets/svg/letter-scramble-hor-dark'

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      minH="500px"
      display={{ base: 'flex' }}
      flexDir="column"
      justifyContent="space-between"
      m={2}
    >
      <Flex
        justifyContent="space-between"
        padding="1rem"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        
      </Flex>
      <Flex flexDir={{ base: 'column' }} ml="1.5rem">
      <Logo
          width={{ base: '150px', md: '200px' }}
          color={colorMode === 'dark' ? '#ffffff' : '#000000'}
          mb={10}
        />
        <Box mb={6}>
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
        </Box>
        <Box mb={4}>See more projects and works at <MagicLink href="https://dev.lucaszapico.space">dev.lucaszapico.space</MagicLink></Box>
        <Box mb={4}>Start a project at <MagicLink href="https://bluemonkeymakes.com">BlueMonkeyMakes.com</MagicLink></Box>

      </Flex>
      <SubFooter />
    </Box>
  )
}

export default Footer
