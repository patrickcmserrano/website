import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import NextLink from 'next/link'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Variant"
              />
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
