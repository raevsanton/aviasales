import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './styles';
import { store, StoreContext } from './store';

ReactDOM.render(
  <>
    <GlobalStyle />
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </>,
  document.getElementById('root'),
);
