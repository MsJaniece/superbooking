// src/components/BookingForm.tsx

import { useState } from 'react'
import { services, Service } from './ServiceCatalog'

export default function BookingForm() {
  const [name,    setName]    = useState('')
  const [service, setService] = useState('')
  const [date,    setDate]    = useState('')
  const [time,    setTime]    = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, service, date, time })
    // TODO: hook up to your API or global state
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow"
    >
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

      <div className="grid grid-cols-2 gap-4 mb-4">
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
    </form>
  )
}
