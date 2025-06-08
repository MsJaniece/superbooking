// src/App.tsx
import ServiceCatalog from './components/ServiceCatalog'
import BookingForm    from './components/BookingForm'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Swap which you render here: */}
      <ServiceCatalog />
      { /* <BookingForm /> */ }
    </div>
  )
}
