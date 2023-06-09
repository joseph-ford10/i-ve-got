import { useState } from 'react'
import Form from './Form'
import Card from './Card'

export default function Home() {
  const [page, setPage] = useState('form')
  const [selection, setSelection] = useState({ time: '', type: '' })

  function pageChange(val) {
    setPage(val)
  }

  function getSelection(newTime, newType) {
    setSelection({ time: newTime, type: newType })
  }

  if (page == 'form') {
    return (
      <Form page={page} pageChange={pageChange} getSelection={getSelection} />
    )
  } else if (page == 'card') {
    return <Card page={page} pageChange={pageChange} selection={selection} />
  }
}
