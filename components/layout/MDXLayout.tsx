import { DefaultLayout } from 'components'
import { MDXProvider } from '@mdx-js/react'
import {
  Heading,
  Text,
  Box,
  Link,
  useColorMode,
  UnorderedList,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
  HeadingOneMDX,
  HeadingTwoMDX,
  HeadingThreeMDX,
  HeadingFourMDX,
  HeadingFiveMDX,
  HeadingSixMDX,
  BlockQuoteMDX,
  LinkMDX,
  ResponsiveImageMDX,
} from 'components'

type LayoutProps = {
  children: ReactNode
}

const MDXLayoutTmp = ({ children }: LayoutProps) => {
  return (
    <MDXProvider
      components={{
        h1: HeadingOneMDX,
        h2: HeadingTwoMDX,
        h3: HeadingThreeMDX,
        h4: HeadingFourMDX,
        h5: HeadingFiveMDX,
        h6: HeadingSixMDX,
        p: Text,
        ul: UnorderedList,
        li: ListItem,
        ol: OrderedList,
        blockquote: BlockQuoteMDX,
        a: LinkMDX,
        img: ResponsiveImageMDX,
      }}
    >
      <DefaultLayout>
        <Box as="main" minH="90vh">
          {children}
        </Box>
      </DefaultLayout>
    </MDXProvider>
  )
}

export default MDXLayoutTmp
