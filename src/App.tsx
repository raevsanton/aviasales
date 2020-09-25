import React from 'react';
import logo from "./assets/images/logo.svg";
import Sort from './components/Sort/Sort';
import Ticket from './components/Ticket/Ticket';
import store from './store/store';
import { observer } from 'mobx-react';

import { Container, Logo, Preloader, Wrapper, Error } from "./styles";
import Filter from './components/Filter/Filter';

@observer 
class App extends React.Component {
  componentDidMount() {
    store.setTickets()
  }
  render() {
    if(store.error) {
      return (
        <Error>An error has occurred. Refresh the page.</Error>
      )
    }
    return (
      <>
        <Logo src={logo} alt="logo" />
        <Container>
          <Filter />
          <Wrapper>
            <Sort />
            {store.isFetching ? <Preloader/> : store.setTicket.map((ticket: Ticket, index: number) => (
              <Ticket
                key={index}
                ticket={ticket}
              />
            ))}
          </Wrapper>
        </Container>
      </>
    )
  }
}

export default App;