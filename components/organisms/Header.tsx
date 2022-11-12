import { Nav, MobileNav } from 'components'
import Head from 'next/head'

const Header = () => {
  return (
    <header>
      <Head>
        <title>Next Head</title>
      </Head>
      <Nav display={{ base: 'none', md: 'flex' }} />
    </header>
  )
}

export default Header
