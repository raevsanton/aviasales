import { TicketFormat } from "../components/Ticket/types";

export const sortByPrice = <T extends TicketFormat>(tickets: Array<T>): Array<T> => {
  return [...tickets].sort((ticketOne: T, ticketTwo: T) => ticketOne.price - ticketTwo.price);
};

export const sortByDuration = <T extends TicketFormat>(tickets: Array<T>): Array<T> => {
  return [...tickets].sort((ticketOne: TicketFormat, ticketTwo: TicketFormat) =>
  ticketOne.durationFrom + ticketOne.durationTo - (ticketTwo.durationFrom + ticketTwo.durationTo))
};
