import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  height:600px;
  background-image: url("images.jpg");
  background-repeat : no-repeat;
  background-size : cover;
  `;

const Header = styled.div`
  height:92px;
  position:fixed;
  width:100%;
  z-index:5;
`;
const Navi = styled.div`
  display:flex;
  height: 100%;
  align-items:center;
`;
const Portfolio = styled.div`
  width: 50%;
  color: white;
  position: relative;
  left: 121px;
  font-size: 25px;
  font-family: serif;
  font-weight: bold;
  
`;
const Menu = styled.div`
  width: 50%;
  display:flex;
  justify-content: space-evenly;
`;

const Span = styled.span`
  color: white;
  cursor:pointer;
  z-index:3;
  &:hover {
    color:orange;
    font-size:20px;
  }
`;
const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 90%;
 font-family: fantasy;
 font-weight: bold;
`;
const Title = styled.div`
  font-size:50px;
  color: white;
`;
const Introduction = styled.div`
  padding-top: 70px;
  color: white;
  font-size: 25px;
  align-items: center;
`;
const IntDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size:20px;
`;
const MainComponent = () => {

  return(
        <Main id="Main">
            <Header id="header">
              <Navi>
                  <Portfolio>BBoo's Portfolio</Portfolio>
                  <Menu>
                    <Span>about me</Span>
                    <Span>skills</Span>
                    <Span>project</Span>
                    <Span>archiving</Span>
                  </Menu>
              </Navi>
            </Header>
            <Content>
              <Title> ㅡ 최승연 ㅡ </Title>
              <Title> 웹 개발자 포트폴리오</Title>
              <Introduction> 
                <IntDiv>안녕하세요. </IntDiv>
                <IntDiv>배우는 걸 좋아하는 프론트 엔드 개발자입니다.</IntDiv> 
              </Introduction>
            </Content>
            
        </Main>
    );
}

export default MainComponent;