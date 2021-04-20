export interface Ticket {
    price: number
    carrier: string
    segments: [
        {
            origin: string
            destination: string
            date: Date
            stops: string[]
            duration: number
        },
        {
            origin: string
            destination: string
            date: Date
            stops: string[]
            duration: number
        }
    ]
}

export interface TicketDestruct {
    price: number
    carrier: string
    originFrom: string
    destinationFrom: string
    dateFrom: Date
    stopsFrom: string[]
    durationFrom: number
    originTo: string
    destinationTo: string
    dateTo: Date
    stopsTo: string[]
    durationTo: number
}