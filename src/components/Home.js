import React, {useContext, useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';
import Project from './Project';
import axios from 'axios';
import ReactLoading from 'react-loading';
import git from "../assets/git.png";
import bootstrap from "../assets/bootstrap.png";
import heroku from "../assets/heroku.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import python from "../assets/python.png";

export default function Home(){
    const {isLight} = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const skills = [git, bootstrap, heroku, javascript, mongo, node, python];
    useEffect(() => {
        let url = "https://full-portfolio.herokuapp.com/api/projects";
        axios
            .get(url)
            .then(function(response){
                if(response.data){
                    setProjects(response.data);
                    setLoading(false);
                }
            })
            .catch(function(err){
                console.log(err);
            })
    }, [])
    return(
        <Homee>
            <Container light = {isLight}>
                <About>
                    <Greet>
                        <Span>Hey, I am </Span>
                        ELKHAYATE MOHAMED
                    </Greet>
                    <Soft>a Software Engineer</Soft>
                    <Job>and a passionate Web Developer from Morocco based in Ukraine</Job>
                    <Job>Who loves to build and deliver quality products.</Job>
                </About>
            <Tech>
                <Techstack>Tech stack I use <i className="fas fa-hand-point-down"></i></Techstack>
                <Skills>
                    {
                        skills.map(function(val){
                            return <Skill key={val}><img src={val} alt = "skill"/></Skill>;
                        }) 
                    } 
                </Skills>
            </Tech>
            <Tech>
                <Techstack>Open Source Projects <i className="fas fa-hand-point-down"></i></Techstack>
                {
                        loading ? <ReactLoading 
                            type='bars' 
                            color='#4c1d95' 
                            height={267} 
                            width={375} 
                            className='loading'
                        /> : 
                        projects.map(function(val){
                            return (<Project 
                                key = {val._id} 
                                git = {val.repo_url}
                                gif = {val.gif_url}
                                img = {val.image_url}
                                title = {val.title}
                                description = {val.description}
                            />)
                        }) 
                }
            </Tech>
            </Container>
        </Homee>
    )
}
const Appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const Techstack = styled.h2`
    line-height: 1.5rem;
    font-weight: 200;
    text-align: center;
`;
const Tech = styled.div`
    margin-top: 90px;
    @media (max-width: 1200px) {
        margin-top: 50px;
    }
`;
const Skills = styled.div`
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    animation: ${Appear} 3750ms linear;
    @media (max-width: 1200px) {
        width: 60%;
    }
    @media (max-width: 900px) {
        width: 80%;
    }
`;
const Skill = styled.div`
    transform: scale(1);
    margin-top: 20px;
`;
const Homee = styled.div`
    top : 80px;
`;
const Container = styled.div`
    color : ${props => props.light ? "#374151" : "#ffffff"};
    width: 100vw;
`;
const About = styled.main`
    text-align: center;
    margin: auto;
    width: 50%;
    @media (max-width: 1200px) {
      width: 70%;
    }
    @media (max-width: 900px) {
      width: 90%;
    }
`;
const Greet = styled.h2`
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
    margin-bottom:0;
    padding: 0;
`;
const Soft = styled.h3`
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    color: #4c1d95;
    margin: 0;
    padding: 0;
    animation: ${Appear} 1750ms  linear;
`;
const Job = styled.p`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    @media (max-width: 700px) {
        font-size: 1.05rem;
    }
`;
const Span = styled.span`
    font-weight: 400;
    margin: 0;
    padding: 0;
`;
