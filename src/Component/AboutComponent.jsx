import React from "react";
import styled from "styled-components";
import { BirthIcon, EmailIcon, HomeIcon, PhoneIcon, SchoolIcon, UserIcon } from "../utils/icon";


const About = styled.div`
  height:50vh;
  background-color:#FFFF24;
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

const ContentTitle = styled.div`

`;

const Text = styled.div`

`;



const AboutComponent = () => {

    return(
        <About >
            <MainTitle>ABOUT ME</MainTitle>
            <SubTitle>
                <UserIcon width="40" height="40" />
                <Content>
                    <ContentTitle>이름</ContentTitle>
                    <Text>최승연</Text>
                </Content>
                <BirthIcon width="40" height="40"/>
                <Content>
                    <ContentTitle>생년월일</ContentTitle>
                    <Text>96.09.17</Text>
                </Content>
                <HomeIcon width="40" height="40"/>
                <Content>
                    <ContentTitle>주소지</ContentTitle>
                    <Text>경기도 이천시</Text>
                </Content>
            </SubTitle>
            <SubTitle>
                <PhoneIcon width="40" height="40"/>
                <Content>
                    <ContentTitle>연락처</ContentTitle>
                    <Text>010-5032-4709</Text>
                </Content>
                <EmailIcon width="40" height="40"/>
                <Content>
                    <ContentTitle>이메일</ContentTitle>
                    <Text>tmddus4709@gmail.com</Text>
                </Content>
                <SchoolIcon width="40" height="40"/>
                <Content>
                    <ContentTitle>학력</ContentTitle>
                    <Text>한경대학교</Text>
                </Content>
            </SubTitle>
            
        </About>
        
    );

}

export default AboutComponent;