import React from 'react'
import {
  Box, ButtonGroup, Container, Icon, Link, Text,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { links } from './data'
import styles from './Footer.module.css'

const Footer: React.FC = () => (
  <Box
    as="footer"
    borderTopWidth="1px"
  >
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
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
      <ButtonGroup
        size="sm"
        ml="2"
      >
        <Link
          href={links.github}
          background="transparent"
          color="gray.500"
          isExternal
        >
          <Icon
            as={FaGithub}
            className={styles.socialIcon}
            aria-label="GitHub"
            w="5"
            h="6"
          />
        </Link>
      </ButtonGroup>
    </Container>
  </Box>
)

export default Footer
