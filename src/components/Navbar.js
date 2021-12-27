import React, {useContext} from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';
import {Link} from "react-router-dom";

export default function Navbar(){
    const { switchTheme, isLight } = useContext(ThemeContext);
    const Style = {textDecoration : "none"};
    return (
        <Navb>
            <Container light={isLight}>
                <Link style={Style} to = "/">
                    <Anchor>
                        <Logo>el<Part light = {isLight}>khayate</Part></Logo>
                    </Anchor>
                </Link>
                <Nav>
                        <Item>RESUME</Item>
                    <Link style={Style} to="/about">
                        <Item>About</Item>
                    </Link>
                    <Frame light = {isLight} onClick={switchTheme}>
                        <i className={`fas fa-${isLight ? 'sun' : 'moon'}`}/>      
                    </Frame>
                </Nav>
            </Container> 
        </Navb>
    )
}
const Appear = keyframes`
    from {
        opacity: 0;
        margin-right: -90px;
    }
    to {
        opacity: 1;
        margin-right: 0px;
    }
`;
const Navb = styled.div`
    width: 100%;
`;
const Frame = styled.div`
    color : ${props => props.light ? "#374151" : "white"};
    transform: scale(1.3);
    margin-left: 20px;
    cursor : pointer;
    background-color : rgba(255, 255, 255, 0.1);
    padding : 4px;
    border-radius : 50%;
`;

const Container = styled.div`
    color : ${props => props.light ? "#374151" : "#ffffff"};
    width: 63%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content : space-between;
    align-content: center;
    height: 80px;
    @media (max-width: 1200px) {
      width: 90%;
    }
`;

const Part = styled.span`
    color : ${props => props.light ? "#4c1d95" : "white"};
`;
const Anchor = styled.a`
    text-decoration: none;
`;

const Logo = styled.h1`
    margin-top: 0px;
    font-weight : 600;
    font-size: 1.5rem;
    line-height: 2rem;
    text-transform: uppercase;
    margin-top: 12px;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    animation: ${Appear} 1750ms  linear;
`;

const Item = styled.h2`
    margin-left: 20px;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    &:hover {
        color : #4c1d95;
    }
`;


