import React, {useContext} from 'react';
import styled from "styled-components";
import Navbar from './components/Navbar';
import { ThemeContext } from './contexts/themeContext';


function App() {
  const {isLight} = useContext(ThemeContext);
  return (
    <Container bg = {isLight}>
        <Navbar />
    </Container>
  );
}

export default App;



const Container = styled.div`
  background-color : ${props => props.bg ? "#ffffff" : "#111827"};
  width: 100vw;
  height: 100vh;
  position : absolute;
`;
