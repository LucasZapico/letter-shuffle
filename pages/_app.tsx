import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App
