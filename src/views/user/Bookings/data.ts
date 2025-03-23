import { type IconType } from 'react-icons'
import { FaCar, FaPlane } from 'react-icons/fa'

export type BookingCardType = {
  id: string
  flightType: string
  timing: {
    label: string
    name: string
  }[]
  travelRoute: string
  icon: IconType
  cancelled?: boolean
}

const bookingCards: BookingCardType[] = [
  {
    id: 'CGDSUAHA12548',
    flightType: 'Business class',
    travelRoute: 'France to New York',
    icon: FaPlane,
    timing: [
      {
        label: 'Departure time',
        name: 'Tue 05 Aug 12:00 AM',
      },
      {
        label: 'Arrival time',
        name: 'Tue 06 Aug 4:00 PM',
      },
      {
        label: 'Booked by',
        name: 'Frances Guerrero',
      },
    ],
  },
  {
    id: 'CGDSUAHA12548',
    flightType: 'Camry, Accord',
    travelRoute: 'Chicago to San Antonio',
    icon: FaCar,
    timing: [
      {
        label: 'Pickup address',
        name: '40764 Winchester Rd',
      },
      {
        label: 'Drop address',
        name: '11185 Mary Ball Rd',
      },
      {
        label: 'Booked by',
        name: 'Frances Guerrero',
      },
    ],
  },
]

export { bookingCards }
