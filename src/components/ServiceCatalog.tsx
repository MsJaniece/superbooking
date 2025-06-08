// src/components/ServiceCatalog.tsx

export type Service = {
  id: string
  name: string
  price: number
  img: string
}

export const services: Service[] = [
  { id: 'cut',      name: 'Haircut',    price: 45, img: 'https://via.placeholder.com/150' },
  { id: 'color',    name: 'Hair Color', price: 75, img: 'https://via.placeholder.com/150' },
  { id: 'manicure', name: 'Manicure',   price: 35, img: 'https://via.placeholder.com/150' },
  { id: 'massage',  name: 'Massage',    price: 60, img: 'https://via.placeholder.com/150' },
]

interface Props {
  selectedService: string
  onSelect: (id: string) => void
}

export default function ServiceCatalog({ selectedService, onSelect }: Props) {
  return (
    <section className="py-12 bg-gray-50 w-full max-w-md">
      <div className="px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => {
            const isSelected = s.id === selectedService
            return (
              <div
                key={s.id}
                onClick={() => onSelect(s.id)}
                className={
                  `cursor-pointer bg-white rounded-lg shadow p-4 flex flex-col ` +
                  (isSelected
                    ? 'ring-2 ring-indigo-500'
                    : 'hover:ring-2 hover:ring-indigo-300')
                }
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-32 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-medium">{s.name}</h3>
                <p className="mt-auto text-lg font-semibold">${s.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
