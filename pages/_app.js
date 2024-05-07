import { ChakraProvider } from "@chakra-ui/react"
import Main from '../components/layouts/main'
import theme from '../lib/theme'

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Main router={router}>
                <Component {...pageProps} key={router.route}/>
            </Main>
        </ChakraProvider>
    )
}

export default Website