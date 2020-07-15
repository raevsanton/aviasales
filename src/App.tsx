import React from 'react';
import logo from "./assets/images/logo.svg";
import styled from 'styled-components';
import Filter from './Filter';
import Sort from './Sort';
import Flight from './Flight';

const Container = styled.div`
  width: 755px;
  margin: 0 auto;
  display: flex;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Logo = styled.img`
  display: flex;
  margin: 50px auto;
`
function App() {
  return (
    <>
      <Logo src={logo} alt="logo" />
      <Container>
        <Filter />
        <Wrapper>
          <Sort />
          <Flight />
          <Flight />
          <Flight />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
