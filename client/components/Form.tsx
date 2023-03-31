import { useState } from 'react'

export default function Form() {
  const [time, setTime] = useState('0')
  const [activity, setActivity] = useState('')
  const [form, setForm] = useState({ time: '', activity: '' })
  const [message, setMessage] = useState('')
  const [page, setPage] = useState('form')

  function handleTimeChange(event) {
    setTime(event.target.value)
  }

  function handleActivityChange(event) {
    setActivity(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(activity)
    if (time == '0' || activity == '') {
      setMessage('Please select both options')
    } else {
      setForm({ time: time, activity: activity })
      setMessage('')
      setForm({ time: '', activity: '' })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>I've got...</h2>
        <div onChange={handleTimeChange} className="selectTime">
          <input type="radio" id="15" name="time-select" value="15" />
          <label htmlFor="15">15 Minutes</label>
          <input type="radio" id="30" name="time-select" value="30" />
          <label htmlFor="30">30 Minutes</label>
          <input type="radio" id="45" name="time-select" value="45" />
          <label htmlFor="45">45 Minutes</label>
          <input type="radio" id="hour" name="time-select" value="hour" />
          <label htmlFor="hour">1 Hour</label>
        </div>
        <div onChange={handleActivityChange} className="selectActivity">
          <h2>I want something...</h2>
          <input type="radio" id="read" name="activity-select" value="read" />
          <label htmlFor="read">to read</label>
          <input type="radio" id="watch" name="activity-select" value="watch" />
          <label htmlFor="watch">to watch</label>
          <input type="radio" id="read" name="activity-select" value="do" />
          <label htmlFor="do">to do</label>
          <input type="radio" id="learn" name="activity-select" value="learn" />
          <label htmlFor="learn">to learn</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Selected time: {time}</p>
      <p>Selected activity: {activity}</p>
      <p>{message}</p>
    </>
  )
}