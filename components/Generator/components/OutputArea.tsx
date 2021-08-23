import React, { SyntheticEvent } from 'react'
import {
  Button, Input, InputGroup, InputRightElement,
} from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import styles from './OutputArea.module.css'

const OutputArea = ({ value }: { value: string}) => {
  const handleInputClick = (event: SyntheticEvent<HTMLInputElement>): void => {
    event.currentTarget.select()
    document.execCommand('copy')
  }

  return (
    <InputGroup>
      <Input
        className={styles.outputInput}
        value={value}
        size="lg"
        fontSize="sm"
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="4px"
        height="14"
        readOnly
        onClick={handleInputClick}
      />
      <InputRightElement
        width="4rem"
      >
        <Button
          colorScheme="blue"
          size="md"
          mt="4"
        >
          <CopyIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default OutputArea
