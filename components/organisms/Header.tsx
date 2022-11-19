import { NavContainer } from 'components'
import Head from 'next/head'

const Header = () => {
  return (
    <header>
      <Head>
        <title>Letter Scramble</title>
      </Head>
      <NavContainer />
    </header>
  )
}

export default Header
