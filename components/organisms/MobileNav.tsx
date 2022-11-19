import { useRef } from 'react'
import {
  useDisclosure,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { MagicLink } from 'components'
import { generate } from 'shortid'
import { mainLinks } from 'meta/navLinks'
import Logo from 'components/assets/svg/letter-scramble-hor-dark'
import { RouterType } from '@types'

const MobileNav = ({
  colorMode,
  router,
  ...rest
}: {
  colorMode: string
  router: RouterType
}) => {
  console.log(router)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box
      justifyContent="flex-end"
      flexGrow="1"
      display={{ base: 'flex', md: 'none' }}
      {...rest}
    >
      <Button ref={btnRef} colorScheme="none" onClick={onOpen}>
        <HamburgerIcon
          color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
        />
      </Button>
      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo width="150px" />
          </DrawerHeader>
          <DrawerBody>
            <Flex justifyContent="flex-end" flexGrow="1">
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
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default MobileNav
