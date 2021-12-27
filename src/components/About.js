import React, {useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';


export default function About() {
    const {isLight} = useContext(ThemeContext);

    return(
        <Container light={isLight}>
            <Title>Hi there!</Title>
            <Para>👋🏻 I’m Elkhayate, a Software engineer.</Para>
            <Para>🎓 Graduated from <a href='https://nure.ua/en/'>KHNURE</a>. (June 2022 😊)</Para>
            <Para>🏠 From Morocco 🇲🇦, but currently based in Ukraine. 🇺🇦  </Para>
            <Para>♟️ I'm into chess.com merdashi1 and Snooker 🎱</Para>
            <Title>What I do well</Title>
            <Para>👨🏻‍💻 Environment: Git, GitHub, npm.</Para>
            <Para>👨🏻‍💻 Code: Python, JavaScript, ReactJs, NextJs, Sanity.</Para>
            <Para>👨🏻‍💻 Data: MongoDB, MySQL.</Para>
            <Para>👨🏻‍💻 Deployment: Heroku.</Para>
            <Title>Get In Touch</Title>
            <Para>DM me on <a href='https://twitter.com/elkha_yate'>Twitter</a> ⚡</Para>
            <Para>📧 me at elkhayatemohamed3@gmail.com</Para>
        </Container>
    );
}

const Container = styled.div`
    color : ${props => props.light ? "#374151" : "#ffffff"};
    width: 40%;
    margin: auto;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 2.5em;
    line-height: 1.5;
`;

const Para = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
`;