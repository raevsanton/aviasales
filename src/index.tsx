import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./styles";

ReactDOM.render(
    <GlobalStyle>
        <App />
    </GlobalStyle>,
    document.getElementById('root')
);