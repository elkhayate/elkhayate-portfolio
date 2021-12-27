import React,{useState} from 'react';
import styled from 'styled-components';

export default function Project(props) {
    const [show, setShow] = useState(false);
    return(
            <Container>
                <ImgSide onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                    <Img src={show ? props.gif : props.img} alt="project img" />
                </ImgSide>
                <ContentSide>
                    <Title>{props.title}</Title>
                    <Descri>{props.description}</Descri>
                    <Anchor href={props.git}><Descri>Github repository</Descri></Anchor>
                </ContentSide>
            </Container>
    )
}
const Anchor = styled.a`
    text-decoration: underline;
    cursor : pointer;
`;

const Descri = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`;
const Title = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
`;
const Img = styled.img`
    height: 100%;
    max-width: 100%;
    border-radius: .75rem;
    transition: transform 0.3s ease-in 10ms;
    &:hover{
        transform: scale(1.5);
        transform-origin: left;
    }
    @media (max-width: 800px) {
        &:hover{
        transform: scale(1.2);
        transform-origin: center;
    }
    }
`;
const Container = styled.div`
    width: 63%;
    margin: auto;
    display: flex;
    justify-content:space-between;
    align-content:center;
    margin-top: 50px;
    
    @media (max-width: 1400px) {
        width: 70%;
    }
    @media (max-width: 1200px) {
        width: 90%;
    }
    @media (max-width: 800px) {
        display: block;
        text-align:center;
    }
`;

const ImgSide = styled.div`
    width: 40%;
    border-radius: 0.75rem;
    height: 200px;
    @media (max-width: 800px) {
        margin: auto;
        width: 90%;
    }
`;

const ContentSide = styled.div`
    display: block;
    justify-content: flex-start;
    align-content: center;
    width: 50%;
    @media (max-width: 800px) {
        width: 80%;
        margin: auto;
        margin-top: 15px;

    }
`;

