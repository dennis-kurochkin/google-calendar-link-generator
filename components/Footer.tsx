import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'

const Footer: React.FC = () => (
  <Box
    as="footer"
    borderTopWidth="1px"
  >
    <Container
      maxW="container.md"
      py={{ base: 3, md: 4 }}
    >
      <Text
        textAlign="center"
        fontSize="sm"
        color="gray.500"
      >
        Made by Dennis Kurochkin
      </Text>
    </Container>
  </Box>
)

export default Footer
