import React from 'react'
import Tickets from "./tickets";

export type IStore = {
    ticketsStore: Tickets
}

export const store: IStore = {
    ticketsStore: new Tickets(),
};

export const StoreContext = React.createContext(store);

export const useStore = () => {
    return React.useContext(StoreContext);
};