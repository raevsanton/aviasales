import { action, computed, observable, makeObservable, runInAction } from 'mobx';
import { TicketResponse, TicketFormat } from '../components/Ticket/types';
import { sortByDuration, sortByPrice } from '../utils/sorts';
import { SortValue } from './types';

export default class Tickets {
  tickets: TicketFormat[] = [];
  searchID: string | null = null;
  error: boolean = false;
  loading: boolean = false;
  offsetCount: number = 1;
  sortedBy: SortValue = 'cheapest';

  constructor() {
    makeObservable(this, {
      tickets: observable,
      searchID: observable,
      error: observable,
      loading: observable,
      offsetCount: observable,
      sortedBy: observable,
      fetchTickets: action,
      fiveTickets: computed,
      sortedTickets: computed,
    });
  }

  get fiveTickets() {
    return this.sortedTickets;
  }

  get sortedTickets() {
    switch (this.sortedBy) {
      case 'cheapest': return sortByPrice(this.tickets);
      case 'fastest': return sortByDuration(this.tickets);
      default: return sortByPrice(this.tickets);
    }
  }

  sortBy = (sortValue: SortValue) => {
    this.sortedBy = sortValue;
  }


  getID = async () => {
    try {
      const responseID = await fetch('https://aviasales-test-api.kata.academy/search');
      const { searchId } = await responseID.json();
      this.searchID = searchId;
    } catch {
      runInAction(() => {
        this.error = true;
      });
    }
  };

  fetchTickets = async () => {
    runInAction(() => {
      this.loading = true;
    });

    if (!this.searchID) {
      await this.getID();
    }

    try {
      const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${this.searchID}`);
      const { tickets } = await responseTickets.json();

      runInAction(() => {
        this.tickets = [...this.tickets, ...tickets
          .map(({ price, carrier, segments }: TicketResponse) => {
            const formatTicket: TicketFormat = {
              price,
              carrier,
              originFrom: segments[0].origin,
              originTo: segments[1].origin,
              destinationFrom: segments[0].destination,
              destinationTo: segments[1].destination,
              dateOriginFrom: segments[0].date,
              dateOriginTo: segments[1].date,
              stopsFrom: segments[0].stops,
              stopsTo: segments[1].stops,
              durationFrom: segments[0].duration,
              durationTo: segments[1].duration,
              dateDestinationFrom: new Date(new Date(segments[0].date).setMinutes(new Date(segments[0].date).getMinutes() + segments[0].duration)),
              dateDestinationTo: new Date(new Date(segments[1].date).setMinutes(new Date(segments[1].date).getMinutes() + segments[1].duration)),
            };
            return formatTicket;
          })
          .slice(0, this.offsetCount * 5)
        ]
      })


    } catch {
      runInAction(() => {
        this.error = true;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
