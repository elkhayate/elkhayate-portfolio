import React,{useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';

export default function Footer() {
    const {isLight} = useContext(ThemeContext);
    return(
        <Container light = {isLight}>
            <Content light = {isLight}>
                <Copyright>© 2022 ELKHAYATE Built with ♡ <Anchor href='https://github.com/elkhayate/elkhayate-portfolio'>Open Sourced on Github</Anchor></Copyright>
            <Socials>
                <Social href='https://twitter.com/elkha_yate'>
                    <i class="fab fa-twitter"/>
                </Social>
                <Social href='https://www.linkedin.com/in/mohamed-elkhayate-4535a91b6/'>
                    <i class="fab fa-linkedin"/>
                </Social>
                <Social href='https://github.com/elkhayate'>
                    <i class="fab fa-github"/>
                </Social>
            </Socials>
            </Content> 
            
        </Container>
    )
}
const Social = styled.a`
    margin: 10px;
    transform: scale(1.8);
    cursor: pointer;
`;

const Container = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 85px;
    display: flex;
    align-items:center;
    justify-content:center;
    color : ${props => props.light ? "black" : "#ffffff"};
`;

const Copyright = styled.p`
    font-size: .875rem;
    line-height: 1.25rem;
    font-family: inherit;
`;

const Anchor = styled.a`
    text-decoration: underline;
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
`;

