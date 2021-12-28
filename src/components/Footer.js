import React,{useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
    const {isLight} = useContext(ThemeContext);
    return(
        <Container light = {isLight}>
            <Content light = {isLight}>
                <Copyright>© 2022 ELKHAYATE Built with ♡</Copyright>
            <Socials>
                <Social href='https://twitter.com/elkha_yate'>
                    <Img src={twitter}/>
                </Social>
                <Social href='https://www.linkedin.com/in/mohamed-elkhayate-4535a91b6/'>
                    <Img src={linkedin}/>
                </Social>
                <Social href='https://github.com/elkhayate'>
                    <Img src={github}/>
                </Social>
            </Socials>
            </Content> 
        </Container>
    )
}
const Social = styled.a`
    margin: 0px;
    transform: scale(.8);
    cursor: pointer;
    opacity: .7;
    transition: opacity .3s linear;
    &:hover{
        opacity: 1;
    }
`;
const Img = styled.img``;
const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    color : ${props => props.light ? "#374151" : "#ffffff"};
    @media (max-width: 700px) {
        margin-top: 50px;
    }
`;

const Copyright = styled.p`
    font-size: .875rem;
    line-height: 1.25rem;
    font-family: inherit;
    @media (max-width: 700px) {
        width: 100%;
        text-align: center;
    }
`;


const Socials = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`;
const Content = styled.div`
    width: 63%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 100%;
    border-top: 1px solid ${props => props.light ? "black" : "white"};
    @media (max-width: 1400px) {
      width: 70%;
    }
    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 700px) {
      width: 95%;
      display: block;
    }
`;

