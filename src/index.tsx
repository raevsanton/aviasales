import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import OpenSansRegular from './assets/fonts/OpenSansRegular.woff';
import OpenSansSemiBold from './assets/fonts/OpenSansSemiBold.woff';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "OpenSansRegular";
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansRegular}) format("woff");
  }
  @font-face {
    font-family: "OpenSansSemiBold";
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansSemiBold}) format("woff");
  }
  body {
    background-color: #F3F7FA;
    font: 12px OpenSansSemiBold, sans-serif; 
    text-transform: uppercase;
    letter-spacing: .5px;
    color: #4A4A4A;
  }
  input {
    width: 20px;
    height: 20px;
    border: 1px solid #9ABBCE;
    border-radius: 2px;
  }
`
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);