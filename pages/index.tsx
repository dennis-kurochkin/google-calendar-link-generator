import React from 'react'
import Head from 'next/head'
import {
  Container, Grid,
} from '@chakra-ui/react'
import Header from '@/core/components/Header'
import Generator from '@/core/components/Generator'
import Footer from '@/core/components/Footer'

const Home: React.FC = () => (
  <Grid
    templateRows="auto 1fr auto"
    h="100vh"
  >
    <Head>
      <title>Google Calendar Event Link Generator</title>
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    <Header />
    <Container
      maxW="container.lg"
    >
      <Generator />
    </Container>
    <Footer />
  </Grid>
)

export default Home
