import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
})


function MyApp({ Component, pageProps }) {
  return (<>
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  </>) 
}

export default MyApp
