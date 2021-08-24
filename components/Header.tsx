import React from 'react'
import {
  Box, Container, Heading, Text,
} from '@chakra-ui/react'

const Header: React.FC = () => (
  <Box
    as="header"
    bg="gray.100"
  >
    <Container
      maxW="container.md"
      py={{ base: 4, md: 5 }}
    >
      <Heading
        as="h1"
        mb={1}
      >
        Gucagen
      </Heading>
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
      >
        An easy way to generate Google Calendar event creation link ✨
      </Text>
    </Container>
  </Box>
)

export default Header
