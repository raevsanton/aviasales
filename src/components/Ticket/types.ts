export interface TicketResponse {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
  ];
}

export interface TicketFormat {
  price: number
  carrier: string
  originFrom: string
  originTo: string
  destinationFrom: string
  destinationTo: string
  dateOriginFrom: string
  dateOriginTo: string
  stopsFrom: string[]
  stopsTo: string[]
  durationFrom: number
  durationTo: number
  dateDestinationFrom: Date
  dateDestinationTo: Date
}
