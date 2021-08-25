import React from 'react'
import {
  Box, Button, ButtonGroup, Container, Icon, IconButton, Link, Text,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { links } from './data'

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
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        fontSize="sm"
        color="gray.500"
      >
        Made by Dennis Kurochkin
        <ButtonGroup
          size="sm"
          ml="2"
        >
          <Link
            href={links.github}
            background="transparent"
            isExternal
          >
            <Icon
              as={FaGithub}
              aria-label="GitHub"
              w="5"
              h="6"
            />
          </Link>
        </ButtonGroup>
      </Text>
    </Container>
  </Box>
)

export default Footer
