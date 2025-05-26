// src/components/ServiceCatalog.tsx


type Service = {
  id: string
  name: string
  price: number
  img: string
}

const services: Service[] = [
  {
    id: 'cut',
    name: 'Haircut',
    price: 45,
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 'color',
    name: 'Hair Color',
    price: 75,
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 'manicure',
    name: 'Manicure',
    price: 35,
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 'massage',
    name: 'Massage',
    price: 60,
    img: 'https://via.placeholder.com/150',
  },
]

export default function ServiceCatalog() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <img
                src={s.img}
                alt={s.name}
                className="h-32 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-medium">{s.name}</h3>
              <p className="mt-auto text-lg font-semibold">${s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
