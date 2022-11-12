import { DefaultLayout } from 'components'
import { Heading, Container, Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <DefaultLayout>
      <Container maxW="container.md">
        <Box py={20}>
          <Heading as="h1" size="lg">
            About Project
          </Heading>
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default About
