import React from 'react';
import logo from "./assets/images/logo.svg";
import Sort from './components/Sort/Sort';
import Ticket from './components/Ticket/Ticket';
import { Container, Logo, Preloader, Wrapper, Error } from "./styles";
import {observer} from "mobx-react-lite";
import {useStore} from "./store";
import {TicketDestruct} from "./types";

const App = observer(() => {
    const { ticketsStore } = useStore();

    React.useEffect(() => {
        ticketsStore.setTickets();
    }, [])

    if(ticketsStore.error) {
        return (
          <Error>An error has occurred. Refresh the page.</Error>
        )
    }
    return (
        <>
          <Logo src={logo} alt="logo" />
          <Container>
            <Wrapper>
              <Sort />
              {ticketsStore.isFetching
                  ? <Preloader/>
                  : ticketsStore.ticketsData.map((ticket: TicketDestruct, index: number) => (
                        <Ticket key={index} {...ticket}/>
                    ))
              }
            </Wrapper>
          </Container>
        </>
    )
})

export default App;