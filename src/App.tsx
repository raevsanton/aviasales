import React from 'react';
import logo from './assets/images/logo.svg';
import { Sort } from './components/Sort';
import { Ticket } from './components/Ticket/';
import { Container, Logo, Preloader, Wrapper, Error } from './styles';
import { observer } from 'mobx-react-lite';
import { useStore } from './store';
import { TicketFormat } from './components/Ticket/types';

export const App = observer(() => {
  const {
    ticketsStore: {
      fetchTickets,
      error,
      loading,
      fiveTickets,
    },
  } = useStore();

  React.useEffect(() => {
    fetchTickets();
  }, []);

  if (error) {
    return <Error>An error has occurred. Refresh the page.</Error>
  }

  return (
    <>
      <Logo src={logo} alt="logo" />
      <Container>
        <Wrapper>
          <Sort />
          {loading
            ? <Preloader />
            : fiveTickets.map((ticket: TicketFormat, index: number) =>
                <Ticket key={index} {...ticket} />
              )}
        </Wrapper>
      </Container>
    </>
  );
});
