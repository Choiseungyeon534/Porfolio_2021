import React from "react";
import styled from "styled-components";
import ShowIcon from "./ShowIcon";


const About = styled.div`
  background-color:#F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width : 837px){
        margin-bottom: 1em;
    }
`;

const MainTitle = styled.div`
    margin: 5vh;
    position: relative;
    left: 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    font-family: Black Han Sans,sans-serif;
    font-weight: bold;
    font-size: 3rem;
    @media only screen and (max-width : 837px){
        font-size: 2rem;
        left: 0;
    }
`;

const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    position: relative;
    left: 100px;
    @media only screen and (max-width : 837px){
        margin: 0px;
        display: flex;
        flex-direction: column;
        
    }
`;
const Band = styled.div`
    display: flex;
    @media only screen and (max-width : 837px){
        margin: 1em;
        padding: 0.3em;
    }
`;
const Content = styled.div`
    width: 200px;
    margin-right: 100px;
    position: relative;
    left: 10px;
`;

const BIGSPAN = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  @media only screen and (max-width : 837px){
        font-size: 1em;
        
    }
`;


const title = ["이름","생년월일","주소"]
const title1 = ["연락처","이메일","학력"]
const content = ["최승연","96.09.17","경기도 이천시"]
const content1 = ["010-5032-4709","tmddus4709@gmail.com","한경대학교"]
const AboutComponent = () => {

    return(
        <About>
            <MainTitle>ABOUT ME</MainTitle>
            <SubTitle>
                {title.map((value,index) => {
                    return(
                        <Band>
                            <ShowIcon Index={index} />
                            <Content>
                                <div><BIGSPAN>{value}</BIGSPAN></div>
                                <div>{content[index]}</div>
                            </Content>
                        </Band>
                    );
                })}
            </SubTitle>
            <SubTitle>
                {title1.map((value,index) => {
                        return(
                            <Band>
                                <ShowIcon Index={index+3} />
                                    <Content>
                                        <div><BIGSPAN>{value}</BIGSPAN></div>
                                        <div>{content1[index]}</div>
                                    </Content>
                            </Band>
                        );
                })}
            </SubTitle>
            
        </About>
        
    );

}

export default AboutComponent;