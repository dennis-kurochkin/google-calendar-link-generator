import React, { useRef } from 'react'
import {
  Box, Button, Input, Link, useToast,
} from '@chakra-ui/react'
import { CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import styles from './OutputArea.module.css'

const OutputArea = ({ value }: { value: string }) => {
  const inputElement = useRef<HTMLInputElement>(null)
  const toast = useToast()
  const isEmpty = !value

  const copyInputContent = () => {
    inputElement.current!.select()
    document.execCommand('copy')

    toast({
      position: 'top',
      title: 'Link have been copied to clipboard',
      status: 'success',
      isClosable: true,
      duration: 2500,
    })
  }

  const inputKeyPressHandler = (e: React.KeyboardEvent) => [' ', 'Enter'].includes(e.key) && copyInputContent()

  return (
    <Box
      display="flex"
    >
      <Input
        ref={inputElement}
        className={`${styles.input} ${isEmpty ? styles.inputEmpty : styles.inputFilled}`}
        value={value}
        placeholder="Your link will be here"
        size="lg"
        fontSize="sm"
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="4px"
        readOnly
        onClick={copyInputContent}
        onKeyPress={inputKeyPressHandler}
      />
      {!isEmpty && (
        <Box
          display="flex"
          ml="2"
        >
          <Button
            as={Link}
            href={value}
            isExternal
            colorScheme="blue"
            size="lg"
            width="10"
            variant="outline"
            backgroundColor="white"
            title="Open generated calendar link in a new tab"
          >
            <ExternalLinkIcon />
          </Button>
          <Button
            colorScheme="blue"
            size="lg"
            width="10"
            ml="2"
            title="Copy generated calendar link"
            onClick={copyInputContent}
          >
            <CopyIcon />
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default OutputArea
