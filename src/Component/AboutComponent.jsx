import React ,{useEffect, useState} from "react";
import styled from "styled-components";


const About = styled.div`
  height:300px;
  background-color:#FFFF24;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.div`
    font-weight: bold;
    font-size: 35px;
    text-decoration: underline;
    margin: 20px;
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

const ContentTitle = styled.div`

`;

const Text = styled.div`

`;



const AboutComponent = () => {

    return(
        <About >
            <MainTitle>ABOUT ME</MainTitle>
            <SubTitle>
                <img className="" alt="" src="user.png"/>
                <Content>
                    <ContentTitle>이름</ContentTitle>
                    <Text>최승연</Text>
                </Content>
                <img className="" alt="" src="document.png"/>
                <Content>
                    <ContentTitle>생년월일</ContentTitle>
                    <Text>96.09.17</Text>
                </Content>
                <img className="" alt="" src="placeholder.png"/>
                <Content>
                    <ContentTitle>주소지</ContentTitle>
                    <Text>경기도 이천시</Text>
                </Content>
            </SubTitle>
            <SubTitle>
                <img className="" alt="" src="smartphone.png"/>
                <Content>
                    <ContentTitle>연락처</ContentTitle>
                    <Text>010-5032-4709</Text>
                </Content>
                <img className="" alt="" src="email.png"/>
                <Content>
                    <ContentTitle>이메일</ContentTitle>
                    <Text>tmddus4709@gmail.com</Text>
                </Content>
                <img className="" alt="" src="pencil.png"/>
                <Content>
                    <ContentTitle>학력</ContentTitle>
                    <Text>한경대학교</Text>
                </Content>
            </SubTitle>
            
        </About>
        
    );

}

export default AboutComponent;