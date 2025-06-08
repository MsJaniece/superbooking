// src/App.tsx
import ServiceCatalog from './components/ServiceCatalog'
import BookingForm    from './components/BookingForm'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-start justify-center gap-8 p-8">
      <ServiceCatalog />
      <BookingForm />
    </div>
  )
}