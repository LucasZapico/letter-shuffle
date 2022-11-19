import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { MagicLink } from 'components'
import moment from 'moment'
import siteMetaData from 'meta/siteMetaData'

const { copyWrite } = siteMetaData

const SubFooter = () => {
  return (
    <Box
      display={{ base: 'flex' }}
      alignItems="center"
      paddingX="1rem"
      paddingY=".5rem"
    >
      <MagicLink href="" paddingX=".5rem">
        Privacy Policy
      </MagicLink>
      <MagicLink href="" paddingX=".5rem">
        Terms of Use
      </MagicLink>
      <Text mb={0} paddingX=".5rem">
        &copy; {copyWrite} {moment().format('YYYY')}
      </Text>
    </Box>
  )
}

export default SubFooter
