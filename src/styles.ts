import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import OpenSansRegular from './assets/fonts/OpenSansRegular.woff';
import OpenSansSemiBold from './assets/fonts/OpenSansSemiBold.woff';

export const GlobalStyle = createGlobalStyle`
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
`;
export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.img`
  display: flex;
  margin: 50px auto;
`;
export const Error = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Preloader = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  border: 5px solid #f3f7fa;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  border-left: 5px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
