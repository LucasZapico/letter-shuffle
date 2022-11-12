import {
  useColorMode,
  useClipboard,
  Text,
  Flex,
  Box,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import { generate } from 'shortid'
import { SetResultsType, ResultsType, CountType } from 'store'

const ResultString = ({ str }: { str: string }) => {
  const { colorMode } = useColorMode()
  const { onCopy, value, hasCopied } = useClipboard(str)
  return (
    <Box
    // borderBottomWidth="1px"
    // borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.300'}
    >
      <Flex ml={10} my={4}>
        <Text mb={0} key={generate()} mr={6}>
          {str}
        </Text>
        <Button size="sm" onClick={onCopy}>
          {hasCopied ? 'Copied!' : 'Copy'}
        </Button>
      </Flex>
    </Box>
  )
}

const ResultsContainer = ({
  results,
  setResults,
  shuffleLetters,
}: {
  results: ResultsType
  setResults: SetResultsType
  shuffleLetters: (count: CountType) => void
}) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      borderTopWidth="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.300'}
    >
      {results.length > 0 && (
        <>
          <Flex flexDir="column" py="10">
            {results &&
              results.map((r) => {
                return <ResultString key={generate()} str={r} />
              })}
          </Flex>
          <ButtonGroup
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              display="block"
              size="sm"
              onClick={() => setResults((prev) => [])}
            >
              Clear Results
            </Button>
            <Button
              display="block"
              size="sm"
              onClick={() => shuffleLetters(1)}
              colorScheme="red"
            >
              One More?
            </Button>
          </ButtonGroup>
        </>
      )}
    </Box>
  )
}

export default ResultsContainer
