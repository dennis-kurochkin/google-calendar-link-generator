import React from 'react'
import Head from 'next/head'
import {
  Container, Grid,
} from '@chakra-ui/react'
import Header from '@/components/Header'
import Generator from '@/components/Generator'
import Footer from '@/components/Footer'

const Home = () => (
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
      maxW="container.md"
      paddingTop="5"
    >
      <Generator />
    </Container>
    <Footer />
  </Grid>
)

export default Home
