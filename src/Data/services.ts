// web/src/Data/services.ts

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
