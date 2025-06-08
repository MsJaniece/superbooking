// src/components/BookingForm.tsx

import { useState, useEffect, FormEvent } from 'react'
import { services, Service } from './ServiceCatalog'

const HOLD_DURATION = 5 * 60  // 5 minutes in seconds

export default function BookingForm({ initialService }: { initialService: string }) {
  const [name, setName]             = useState('')
  const [service, setService]       = useState(initialService)
  const [date, setDate]             = useState('')
  const [time, setTime]             = useState('')
  const [timeLeft, setTimeLeft]     = useState(HOLD_DURATION)
  const [timerActive, setTimerActive] = useState(false)

  // Start the timer on first user interaction (name or service select)
  useEffect(() => {
    if (!timerActive && (name !== '' || service !== '')) {
      setTimerActive(true)
    }
  }, [name, service, timerActive])

  // Countdown logic
  useEffect(() => {
    if (!timerActive) return
    if (timeLeft <= 0) {
      alert('Your booking window has expired. Please start over.')
      setTimerActive(false)
      return
    }
    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timerActive, timeLeft])

  // Format mm:ss
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const seconds = String(timeLeft % 60).padStart(2, '0')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ name, service, date, time })
    // TODO: call your booking API, then clear timerActive
    setTimerActive(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow relative"
    >
      {/* Countdown Timer */}
      {timerActive && (
        <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-700 font-semibold text-center py-2 rounded-t-lg">
          Time left to complete booking: {minutes}:{seconds}
        </div>
      )}

      <div className={timerActive ? 'mt-8' : ''}>
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

        <label className="block mb-4">
          <span className="font-medium">Your Name</span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="font-medium">Service</span>
          <select
            value={service}
            onChange={e => setService(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select a service…</option>
            {services.map((s: Service) => (
              <option key={s.id} value={s.id}>
                {s.name} — ${s.price}
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <label className="block">
            <span className="font-medium">Date</span>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </label>

          <label className="block">
            <span className="font-medium">Time</span>
            <input
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg"
        >
          Book Now
        </button>
      </div>
    </form>
  )
}
