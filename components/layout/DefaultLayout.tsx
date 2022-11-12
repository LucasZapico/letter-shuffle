import { Footer, Header } from 'components'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main" minH="90vh">
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default DefaultLayout
