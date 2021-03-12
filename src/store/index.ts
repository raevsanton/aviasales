import React from 'react'
import TicketsStore from './tickets';

export const storesContext = React.createContext({
    tickets: new TicketsStore(),
})