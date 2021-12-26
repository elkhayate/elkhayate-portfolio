import React, {useContext} from 'react';
import styled from 'styled-components';
import { DataContext } from '../contexts/dataContext';
import { ThemeContext } from '../contexts/themeContext';



export default function Home(){
    const {isLight} = useContext(ThemeContext);
    const {skills, loading} = useContext(DataContext);
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
            

            <Skills>
                {
                    skills.map(function(val){
                        return <Skill><i class={val.image_url}/></Skill>;
                    })
                }
            </Skills>
            </Container>
        </Homee>
    )
}

const Skills = styled.div`
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin-top: 40px;
`;
const Skill = styled.div`
    transform: scale(2);
`;
const Homee = styled.div`
    position: absolute;
    top : 80px;
`;
const Container = styled.div`
    color : ${props => props.light ? "#374151" : "#ffffff"};
    width: 100vw;
`;
const About = styled.div`
    text-align: center;
    margin: auto;
    width: 50%;
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
`;
const Job = styled.p`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
`;
const Span = styled.span`
    font-weight: 400;
    margin: 0;
    padding: 0;
`;
