import React, {useContext} from 'react';
import styled from "styled-components";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeContext } from './contexts/themeContext';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  const {isLight} = useContext(ThemeContext);
  return (
    <Container bg = {isLight}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component = {<Home/>} />
          <Route path="/about" exact component={<About/>} />
        </Routes>
        <Footer />
      </Router>  
    </Container>
  );
}

export default App;



const Container = styled.div`
  background-color : ${props => props.bg ? "#ffffff" : "#111827"};
  width: 100vw;
  height: 100vh;
  position : relative;
`;
