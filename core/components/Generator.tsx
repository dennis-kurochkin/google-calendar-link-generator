import React, { useState } from 'react'
import {
  Box, FormControl, FormHelperText, FormLabel, Input, Textarea,
} from '@chakra-ui/react'

const DEFAULT_DESC_TEXT = 'Description for your event.\nCan be multi-line, contain links and reasonable amount of text.'

const Generator: React.FC = () => {
  const [descText, setDescText] = useState<string>(DEFAULT_DESC_TEXT)

  return (
    <Box
      py={6}
    >
      <FormControl
        id="title"
      >
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="e.g. An appointment"
        />
      </FormControl>
      <FormControl
        id="description"
        mt={3}
      >
        <FormLabel>
          Description
        </FormLabel>
        <Textarea
          value={descText}
          onFocus={({ currentTarget }) => currentTarget.value === DEFAULT_DESC_TEXT && setDescText('')}
          onBlur={({ currentTarget }) => !currentTarget.value && setDescText(DEFAULT_DESC_TEXT)}
          onInput={({ currentTarget }) => setDescText(currentTarget.value)}
          rows={3}
        />
      </FormControl>
      <FormControl
        id="location"
        mt={3}
      >
        <FormLabel>
          Location
        </FormLabel>
        <Textarea
          placeholder="e.g. 11 W 53rd St, New York, NY 10019, United States"
          rows={2}
        />
        <FormHelperText>
          Can be an address or just a name of the place, most of the times Google will figure it out
        </FormHelperText>
      </FormControl>
    </Box>
  )
}

export default Generator
