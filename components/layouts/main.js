import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1="></meta>
                <title> Patrick Serrano - Homepage </title>
            </Head>
            <Navbar path={router.asPath}></Navbar>
            <Container maxW="container.lg" pt={24}>
                {children}
            </Container>
        </Box>
    )
}

export default Main