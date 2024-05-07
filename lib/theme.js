import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
}

const colors = {
  glassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const components = {
  
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme