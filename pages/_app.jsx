import '../styles/globals.css'
import { ChakraProvider, extendTheme, Spacer, VStack } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
})


function MyApp({ Component, pageProps }) {
  return (<>
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </VStack>
    </ChakraProvider>
  </>) 
}

export default MyApp
