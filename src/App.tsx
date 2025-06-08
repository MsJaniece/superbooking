// src/App.tsx
import { useState } from 'react'
import ServiceCatalog from './components/ServiceCatalog'
import BookingForm    from './components/BookingForm'

export default function App() {
  const [selectedService, setSelectedService] = useState('')
  const [fakeBusy, setFakeBusy]               = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Fake-Busy Toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setFakeBusy(!fakeBusy)}
          className={
            `px-4 py-2 rounded-lg font-semibold ` +
            (fakeBusy
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-800')
          }
        >
          {fakeBusy ? 'Fake Busy: ON' : 'Fake Busy: OFF'}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        <ServiceCatalog
          selectedService={selectedService}
          onSelect={setSelectedService}
        />
        <BookingForm
          initialService={selectedService}
          fakeBusy={fakeBusy}
        />
      </div>
    </div>
  )
}
