import React from "react";
import styled from "styled-components";
import ShowIcon from "./ShowIcon";


const About = styled.div`
  height:360px;
  background-color:#F9C51D;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.div`
    font-weight: bold;
    font-size: 35px;
    text-decoration: underline;
    margin: 5vh;
    position: relative;
    left: 20px;
`;

const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    position: relative;
    left: 100px;
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
                        <>
                            <ShowIcon Index={index} />
                            <Content>
                                <div><BIGSPAN>{value}</BIGSPAN></div>
                                <div>{content[index]}</div>
                            </Content>
                        </>
                    );
                })}
            </SubTitle>
            <SubTitle>
                {title1.map((value,index) => {
                        return(
                            <>
                                <ShowIcon Index={index+3} />
                                    <Content>
                                        <div><BIGSPAN>{value}</BIGSPAN></div>
                                        <div>{content1[index]}</div>
                                    </Content>
                            </>
                        );
                })}
            </SubTitle>
            
        </About>
        
    );

}

export default AboutComponent;