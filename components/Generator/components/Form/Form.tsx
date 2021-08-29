import React, { forwardRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import {
  Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Textarea,
} from '@chakra-ui/react'
import { formatDate } from './functions'
import { FormValues } from './types'
import { FORM_CONTROL_MARGIN, INPUT_DATE_FORMAT } from './constants'
import { todayFormattedDate } from './data'

const StartDateCustomInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>((props, ref) => (
  <Input
    ref={ref}
    value={props.value}
    placeholder={todayFormattedDate}
    readOnly
    onClick={props.onClick}
  />
))

const EndDateCustomInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>((props, ref) => (
  <Input
    ref={ref}
    value={props.value}
    placeholder={todayFormattedDate}
    readOnly
    onClick={props.onClick}
  />
))

const Form = ({ onGetLinkParams }: { onGetLinkParams: Function}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = ({
    title, description, location, startDate, endDate,
  }: FormValues) => {
    onGetLinkParams(
      `&text=${title}&details=${description}&location=${location}${startDate && endDate ? `&dates=${formatDate(startDate)}/${formatDate(endDate)}` : ''}`,
    )
  }

  return (
    <Box
      as="form"
      pt={{ base: 5, md: 6 }}
      pb="8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl
        isRequired
        isInvalid={!!errors.title}
      >
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="e.g. An appointment"
          id="title"
          {...register('title', { required: true })}
          required={false}
        />
        <FormErrorMessage>This field is required.</FormErrorMessage>
      </FormControl>
      <FormControl
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>
          Description
        </FormLabel>
        <Textarea
          placeholder="Description for your event"
          rows={3}
          id="description"
          {...register('description')}
        />
        <FormHelperText>
          Can be multi-line, contain links and reasonable amount of text
        </FormHelperText>
      </FormControl>
      <FormControl
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>
          Location
        </FormLabel>
        <Textarea
          placeholder="e.g. 11 W 53rd St, New York, NY 10019, United States"
          rows={2}
          id="location"
          {...register('location')}
        />
        <FormHelperText>
          Can be an address or just a name of the place, most of the times Google will figure it out
        </FormHelperText>
      </FormControl>
      <FormControl
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>Start date and time</FormLabel>
        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              dateFormat={INPUT_DATE_FORMAT}
              customInput={<StartDateCustomInput />}
              timeIntervals={15}
              showYearDropdown
              showTimeSelect
              onChange={(date: Date) => field.onChange(date)}
            />
          )}
        />
      </FormControl>
      <FormControl
        mt={FORM_CONTROL_MARGIN}
      >
        <FormLabel>End date and time</FormLabel>
        <Controller
          control={control}
          name="endDate"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              dateFormat={INPUT_DATE_FORMAT}
              customInput={<EndDateCustomInput />}
              timeIntervals={15}
              showYearDropdown
              showTimeSelect
              onChange={(date: Date) => field.onChange(date)}
            />
          )}
        />
      </FormControl>
      <Button
        type="submit"
        colorScheme="blue"
        mt={6}
      >
        Generate event link
      </Button>
    </Box>
  )
}

export default Form
