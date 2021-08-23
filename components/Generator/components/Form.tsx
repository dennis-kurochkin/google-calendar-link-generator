import React, { useState } from 'react'
import {
  Box, Button, FormControl, FormHelperText, FormLabel, Input, Textarea,
} from '@chakra-ui/react'

const FORM_CONTROL_MARGIN = 4

const Form = ({ onGetLinkParams }: { onGetLinkParams: Function}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSubmit = () => {
    onGetLinkParams(`&text=${title}&details=${description}&location=${location}&dates=${startDate}%2F${endDate}`)
  }

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
          value={title}
          placeholder="e.g. An appointment"
          onInput={(e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
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
          value={description}
          placeholder="Description for your event"
          rows={3}
          onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setDescription(e.currentTarget.value)}
        />
        <FormHelperText>
          Can be multi-line, contain links and reasonable amount of text.
        </FormHelperText>
      </FormControl>
      <FormControl
        id="location"
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>
          Location
        </FormLabel>
        <Textarea
          value={location}
          placeholder="e.g. 11 W 53rd St, New York, NY 10019, United States"
          rows={2}
          onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setLocation(e.currentTarget.value)}
        />
        <FormHelperText>
          Can be an address or just a name of the place, most of the times Google will figure it out
        </FormHelperText>
      </FormControl>
      <FormControl
        id="start-date"
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>Start date and time</FormLabel>
        <Input
          value={startDate}
          placeholder="03.03.2021"
          onInput={(e: React.FormEvent<HTMLInputElement>) => setStartDate(e.currentTarget.value)}
        />
      </FormControl>
      <FormControl
        id="end-date"
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>End date and time</FormLabel>
        <Input
          value={endDate}
          placeholder="03.03.2021"
          onInput={(e: React.FormEvent<HTMLInputElement>) => setEndDate(e.currentTarget.value)}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        mt={6}
        onClick={handleSubmit}
      >
        Generate event link
      </Button>
    </Box>
  )
}

export default Form
