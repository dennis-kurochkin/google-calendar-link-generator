import React from 'react'
import { Form } from './components'

const BASE_LINK = 'https://www.google.com/calendar/render?action=TEMPLATE'

const Generator = () => {
  const handleGetLinkParams = (linkParams: string) => {
    const url = encodeURI(`${BASE_LINK}${linkParams}`)
    console.log(url)
  }
  return (
    <Form
      onGetLinkParams={handleGetLinkParams}
    />
  )
}

export default Generator
