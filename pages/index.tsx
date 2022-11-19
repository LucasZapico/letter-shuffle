import { useEffect } from 'react'
import {
  Box,
  Flex,
  Container,
  Heading,
  Input,
  Button,
  useColorMode,
} from '@chakra-ui/react'
import {
  DefaultLayout,
  // LanguageSelect,
  IterationCount,
  ResultsContainer,
} from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {
  useLanguage,
  Language,
  useWord,
  useResults,
  useCount,
} from 'store'

/**
 * init types
 *  */
const defaultLanguage: Language = 'non-sense'

const Home: NextPage = () => {
  const { colorMode } = useColorMode()
  const [language, setLanguage] = useLanguage(defaultLanguage)
  const [word, setWord] = useWord('')
  const [results, setResults] = useResults([])
  const [count, setCount] = useCount(1)

  const shuffleLetters = (c) => {
    const lettersArr = word.split('')

    while (c > 0) {
      lettersArr.sort(() => Math.random() - 0.5)
      const newShuffle = lettersArr.join('')

      if (newShuffle !== word) {
        setResults((prev) => [...prev, newShuffle])
        c = c - 1
      }
    }
  }

  /**
   * TODO: review eslint no empty arrow rule and desired functionality
   */
  /* eslint-disable-next-line */
  useEffect(() => {}, [word, setWord])

  return (
    <DefaultLayout>
      <Container maxW="container.xl" py={20}>
        <Heading>Letter Scramble</Heading>

        <Box
          py={10}
          px={6}
          background={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
          borderRadius="md"
        >
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            py={10}
          >
            <Box px={4} flexGrow="1" maxW="600px">
              <Heading as="div" size="sm" mb={4} variant="sec">
                Enter a word of short phrase
              </Heading>
              <Input
                flexBasis={{ base: '60%' }}
                placeholder=""
                onChange={({ target: { value } }) => setWord(value)}
              />
            </Box>
            {/* <Box px={4}>
              <Heading as="div" size="sm" mb={4}>
                Language
              </Heading>
              <LanguageSelect
                flexBasis={{ base: '10%' }}
                language={language}
                setLanguage={setLanguage}
              />
            </Box> */}
            <Box px={4}>
              <Heading as="div" size="sm" mb={4}>
                Count
              </Heading>
              <IterationCount setCount={setCount} count={count} />
            </Box>
            <Box
              mt={4}
              px={4}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button
                isDisabled={word.length < 1 ? true : false}
                onClick={() => shuffleLetters(count)}
                colorScheme="red"
              >
                Shuffle
              </Button>
            </Box>
          </Flex>
          <ResultsContainer
            results={results}
            setResults={setResults}
            shuffleLetters={shuffleLetters}
          />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default Home
