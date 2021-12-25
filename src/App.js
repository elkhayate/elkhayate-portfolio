import React, {useContext} from 'react';
import styled from "styled-components";
import { ThemeContext } from './contexts/themeContext';


function App() {
  const {isLight, switchTheme} = useContext(ThemeContext);
  return (
    <Container bg = {isLight}>
        <Test>hello</Test>
        <button onClick={switchTheme}>switch</button>
    </Container>
  );
}

export default App;



const Container = styled.div`
  background-color : ${props => props.bg ? "#ffffff" : "#111827"};
  width: 100vw;
  height: 100vh;
`;
const Test = styled.div`
  background-color: rgba(31, 41, 55, 1);
  height: 100px;
  width: 200px;
  margin: 0 auto;
`;
