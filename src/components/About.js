import React, {useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';


export default function About() {
    const {isLight} = useContext(ThemeContext);

    return(
        <Container light={isLight}>
            <Title>Hi there!</Title>
            <Para>ππ» Iβm Elkhayate, a Software engineer.</Para>
            <Para>π Graduated from <a href='https://nure.ua/en/'>KHNURE</a>. (June 2022 π)</Para>
            <Para>π  From Morocco π²π¦, currently based in Ukraine. πΊπ¦  </Para>
            <Para>βοΈ I'm into chess (chess.com merdashi1) and Snooker π±</Para>
            <Title>What I do well</Title>
            <Para>π¨π»βπ» Environment: Git, GitHub, npm.</Para>
            <Para>π¨π»βπ» Code: Python, JavaScript, ReactJs, NextJs, Sanity.</Para>
            <Para>π¨π»βπ» Data: MongoDB, MySQL.</Para>
            <Para>π¨π»βπ» Deployment: Heroku.</Para>
            <Title>Get In Touch</Title>
            <Para>DM me on <a href='https://twitter.com/elkha_yate'>Twitter</a> β‘</Para>
            <Para>π§ me at elkhayatemohamed3@gmail.com</Para>
        </Container>
    );
}

const Container = styled.div`
    color : ${props => props.light ? "#374151" : "#ffffff"};
    width: 40%;
    margin: auto;
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 900px) {
        width: 90%;
    }
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
    @media (max-width: 900px) {
        padding: 0;
        margin: 3px;
        font-size: 15px;
    }
`;