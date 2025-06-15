import { services, Service } from '../Data/services'

export default function ServiceCatalog({
  selectedService,
  onSelect,
}: {
  selectedService: string
  onSelect: (id: string) => void
}) {
  return (
    <section className="w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 gap-4">
        {services.map((s: Service) => {
          const isSelected = s.id === selectedService
          return (
            <div
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={
                `cursor-pointer bg-white rounded-lg shadow p-4 flex flex-col transition ` +
                (isSelected
                  ? 'border-4 border-pink-600'
                  : 'border border-transparent hover:border-pink-300')
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
    </section>
  )
}
