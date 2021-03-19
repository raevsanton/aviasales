import { makeAutoObservable } from "mobx"
import { Ticket, TicketDestruct } from "../types";

export default class Tickets {
    ticketsData: Array<TicketDestruct> = [];
    error: boolean = false;
    isFetching: boolean = true;

    constructor() {
        makeAutoObservable(this)
    }

    setTickets = async() => {
        try {
            const responseId = await fetch('https://front-test.beta.aviasales.ru/search');
            const dataId = await responseId.json();
            const responseTickets = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${dataId.searchId}`);
            const dataTickets = await responseTickets.json();
            this.ticketsData = dataTickets.tickets
                .slice(0, 5)
                .map((ticket: Ticket) => {
                    const object: TicketDestruct = {
                        price: ticket.price,
                        carrier: ticket.carrier,
                        originFrom: ticket.segments[0].origin,
                        destinationFrom: ticket.segments[0].destination,
                        dateFrom: ticket.segments[0].date,
                        stopsFrom: ticket.segments[0].stops,
                        durationFrom: ticket.segments[0].duration,
                        originTo: ticket.segments[1].origin,
                        destinationTo: ticket.segments[1].destination,
                        dateTo: ticket.segments[1].date,
                        stopsTo: ticket.segments[1].stops,
                        durationTo: ticket.segments[1].duration
                    };
                    return object;
                })
                .sort((ticketOne: TicketDestruct, ticketTwo: TicketDestruct) => ticketOne.price - ticketTwo.price);
            this.isFetching = false;
        } catch(err) {
            this.error = true;
        }
    }

    sortTickets = (event: string) => {
        switch(event) {
            case '0':
                this.ticketsData = this.ticketsData.sort((ticketOne: TicketDestruct, ticketTwo: TicketDestruct) =>
                    ticketOne.price - ticketTwo.price);
                break;
            case '1':
                this.ticketsData = this.ticketsData.sort((ticketOne: TicketDestruct, ticketTwo: TicketDestruct) =>
                    (ticketOne.durationFrom + ticketOne.durationTo) - (ticketTwo.durationFrom + ticketTwo.durationTo));
                break;
        }
    }
}