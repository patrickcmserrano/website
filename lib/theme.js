import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/jetbrains-mono';



const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
}

const fonts = {
  heading: "'JetBrains Mono'",
  body: "'JetBrains Mono'",
  mono: "'JetBrains Mono'",
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