import React, { useState } from 'react'
import {
  Box, Button, FormControl, FormHelperText, FormLabel, Input, Radio, RadioGroup, Stack, Textarea,
} from '@chakra-ui/react'

const FORM_CONTROL_MARGIN = 4
const DEFAULT_DESC_TEXT = 'Description for your event.\nCan be multi-line, contain links and reasonable amount of text.'

const Generator: React.FC = () => {
  const [descText, setDescText] = useState<string>(DEFAULT_DESC_TEXT)

  return (
    <Box
      py={{ base: 5, md: 6 }}
      maxWidth="container.sm"
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
        mt={FORM_CONTROL_MARGIN}
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
        mt={FORM_CONTROL_MARGIN}
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
      <FormControl
        id="start-date"
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>Start date</FormLabel>
        <Input
          placeholder="03.03.2021"
        />
      </FormControl>
      <FormControl
        id="end-date"
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>End date</FormLabel>
        <Input
          placeholder="03.03.2021"
        />
      </FormControl>
      <FormControl
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>Show event as busy or available?</FormLabel>
        <RadioGroup
          defaultValue="busy"
        >
          <Stack
            direction="column"
          >
            <Radio
              value="busy"
            >
              Busy
            </Radio>
            <Radio
              value="available"
            >
              Available
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        mt={6}
      >
        Generate event link
      </Button>
    </Box>
  )
}

export default Generator
