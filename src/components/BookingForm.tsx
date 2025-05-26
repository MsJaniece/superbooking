import { useState } from 'react'

export default function BookingForm() {
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  return (
    <form className="w-full max-w-lg p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

      {/* Service selector */}
      <label className="block mb-4">
        <span className="text-gray-700">Service</span>
        <select
          className="mt-1 block w-full border-gray-300 rounded"
          value={service}
          onChange={e => setService(e.target.value)}
        >
          <option value="">Select a service…</option>
          <option value="cut">Haircut — $45</option>
          <option value="color">Color — $75</option>
          {/* TODO: populate dynamically */}
        </select>
      </label>

      {/* Date picker */}
      <label className="block mb-4">
        <span className="text-gray-700">Date</span>
        <input
          type="date"
          className="mt-1 block w-full border-gray-300 rounded"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>

      {/* Time selector */}
      <label className="block mb-6">
        <span className="text-gray-700">Time</span>
        <input
          type="time"
          className="mt-1 block w-full border-gray-300 rounded"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700"
      >
        Continue
      </button>
    </form>
  )
}
