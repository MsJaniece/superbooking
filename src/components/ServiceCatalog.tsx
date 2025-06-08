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
    <section className="py-6 bg-white rounded-lg shadow w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 px-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pb-4">
        {services.map((s) => {
          const isSelected = s.id === selectedService
          return (
            <div
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={
                `cursor-pointer rounded-lg p-4 flex flex-col items-center ` +
                (isSelected
                  ? 'ring-2 ring-indigo-500'
                  : 'bg-gray-50 hover:ring-2 hover:ring-indigo-300')
              }
            >
              <img
                src={s.img}
                alt={s.name}
                className="h-24 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-medium">{s.name}</h3>
              <p className="mt-1 text-sm text-gray-600">${s.price}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
