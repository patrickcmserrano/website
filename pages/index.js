import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react'

const Example = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}

const Page = () => {
  return (
    <Container>
      <Box borderRadius="md" bg="" p={3} mb={6} align="center">
        Hello! I&apos;m a fullcycle software developer based in Brazil 🇧🇷🌎
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Patrick Serrano
          </Heading>
          <Text>
            Digital Craftzman ( Software Engineering / Ecommerce / Crypto ){' '}
          </Text>
          <Example />
        </Box>
      </Box>
    </Container>
  )
}
export default Page
