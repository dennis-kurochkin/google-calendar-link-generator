import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-datepicker/dist/react-datepicker.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component
        {...pageProps}
      />
    </ChakraProvider>
  )
}

export default App
