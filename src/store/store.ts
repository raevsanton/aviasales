import {observable, toJS, action, computed } from 'mobx';
import {Ticket, TicketDestruct} from "../types";

class Store {
    @observable ticketsData: Array<any> = [];
    @observable error: boolean = false;
    @observable isFetching: boolean = true;

    @action
    setTickets = () => {
        fetch('./tickets.json')
            .then(res => res.json())
            .then(data => {
                this.ticketsData = data[0].tickets
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
            })
        .catch(error => this.error = true)
    }

    @computed
    get setTicket() {
        return toJS(this.ticketsData);
    }

    @action
    sortTickets = (event: string) => {
        switch(event) {
            case '0':
                let ticketsMostCheap = this.ticketsData
                    .slice()
                    .sort((ticketOne: TicketDestruct, ticketTwo: TicketDestruct) => ticketOne.price - ticketTwo.price);
                this.ticketsData = ticketsMostCheap;
                break;
            case '1':
                let ticketsMostQuick = this.ticketsData
                    .slice()
                    .sort((ticketOne: TicketDestruct, ticketTwo: TicketDestruct) => 
                    (ticketOne.durationFrom + ticketOne.durationTo) - (ticketTwo.durationFrom + ticketTwo.durationTo));
                this.ticketsData = ticketsMostQuick;
                break;
        }
    }
}

export default new Store();