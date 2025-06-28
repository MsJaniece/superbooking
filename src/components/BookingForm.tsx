// src/components/BookingForm.tsx
import { useState, useEffect, FormEvent } from 'react'
import { services, Service } from '../Data/services'

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
]

export default function BookingForm({
  initialService = '',
  fakeBusy = false,
}: {
  initialService?: string
  fakeBusy?: boolean
}) {
  const [name, setName] = useState('')
  const [service, setService] = useState(initialService)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [blockedSlots, setBlockedSlots] = useState<string[]>([])

  useEffect(() => {
    setService(initialService)
  }, [initialService])

  useEffect(() => {
    if (fakeBusy) {
      const busy = TIME_SLOTS.filter(() => Math.random() < 0.3)
      setBlockedSlots(busy)
    } else {
      setBlockedSlots([])
    }
  }, [fakeBusy])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert(JSON.stringify({ name, service, date, time }, null, 2))
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow">
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

      <label className="block mb-4">
        <span className="font-medium">Date</span>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </label>

      <label className="block mb-6">
        <span className="font-medium">Time</span>
        <select
          value={time}
          onChange={e => setTime(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Select a time…</option>
          {TIME_SLOTS.map(slot => (
            <option
              key={slot}
              value={slot}
              disabled={blockedSlots.includes(slot)}
              className={blockedSlots.includes(slot) ? 'text-gray-400' : ''}
            >
              {slot} {blockedSlots.includes(slot) && '(busy)'}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg"
      >
        Confirm Appointment
      </button>
    </form>
  )
}
