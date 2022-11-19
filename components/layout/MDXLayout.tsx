// TODO: sort out type error with MDX JSX.Element
// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
