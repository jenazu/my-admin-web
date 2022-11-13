import React from "react";
import styled from "styled-components";
import AccountBox from "./components/accountBox";


function App() {
  return (
  <Container>
    <AccountBox/>
  </Container>
  );
}


export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;