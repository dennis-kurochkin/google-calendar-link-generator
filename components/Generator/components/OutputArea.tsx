import React, { useRef } from 'react'
import {
  Button, Input, InputGroup, InputRightElement, Link, useToast,
} from '@chakra-ui/react'
import { CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import styles from './OutputArea.module.css'

const OutputArea = ({ value }: { value: string }) => {
  const inputElement = useRef<HTMLInputElement>(null)
  const toast = useToast()
  const isEmpty = !value

  const copyInputContent = (): void => {
    inputElement?.current?.select()
    document.execCommand('copy')

    toast({
      position: 'top',
      title: 'Link have been copied to clipboard',
      status: 'success',
      isClosable: true,
      duration: 2500,
    })
  }

  return (
    <InputGroup>
      <Input
        className={`${styles.input} ${isEmpty ? styles.inputEmpty : styles.inputFilled}`}
        value={value}
        ref={inputElement}
        placeholder="Your link will be here"
        size="lg"
        fontSize="sm"
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="4px"
        height="14"
        readOnly
        onClick={copyInputContent}
      />
      {!isEmpty && (
        <InputRightElement
          width="7rem"
        >
          <Button
            as={Link}
            href={value}
            isExternal
            colorScheme="blue"
            size="md"
            width="10"
            mt="4"
            variant="outline"
            backgroundColor="white"
          >
            <ExternalLinkIcon />
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            width="10"
            mt="4"
            ml="2"
            onClick={copyInputContent}
          >
            <CopyIcon />
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default OutputArea
