export const flightDuration = (totalMinutes: number): string => {
  const minutes = (totalMinutes % 60).toString().padStart(2, '0');
  const hours = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
  return `${hours}h ${minutes}m`;
};

export const flightTime = (date: Date | string): string => {
  const minutes = new Date(date).getMinutes().toString().padStart(2, '0');
  const hours = new Date(date).getHours().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const stopsTitle = (stops: string[]): string => {
  if (stops.length === 1) return '1 stop';
  return `${stops.length} stops`;
};

export const stopsView = (stops: string[]): string =>
  stops.length === 0 ? 'Non-Stop' : [stops].join(', ');

export const ticketPrice = (price: number): string =>
  price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
