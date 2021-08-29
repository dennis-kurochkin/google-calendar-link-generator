import React, { useState } from 'react'
import { Form, OutputArea } from './components'

const BASE_LINK = 'https://calendar.google.com/calendar/render?action=TEMPLATE'

const Generator = () => {
  const [url, setUrl] = useState('')

  const handleGetLinkParams = (linkParams: string) => {
    setUrl(encodeURI(`${BASE_LINK}${linkParams}`))
  }

  return (
    <>
      <OutputArea
        value={url}
      />
      <Form
        onGetLinkParams={handleGetLinkParams}
      />
    </>
  )
}

export default Generator
