// src/App.tsx

import ServiceCatalog from './components/ServiceCatalog'
import BookingForm    from './components/BookingForm'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceCatalog />
      {/* or <BookingForm /> */}
    </div>
  )
}
