import React from 'react';
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";

const Project = styled.div`
    height:150vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:violet;
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
    flex-direction: column;
    margin: 20px;
    align-items: center;
`;

const Content = styled.div`
    background-color: white;
    border-radius: 30px;
    width: 130vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentTitle = styled.div`
    font-size: 30px;
    padding: 30px;
    font-family: fantasy;
    color: crimson;
`;

const ContentImage = styled.div`
    margin: 20px;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-family: snas-serif;
`;
const TextBox = styled.div`
    display: flex;
    padding: 5px;
`;
const TextTitle = styled.div`
    width: 20vh;
    font-weight: bold;
`;

const TextDetail = styled.div`

`;

const images = [
    { url: "1.JPG" },
    { url: "2.JPG" },
    { url: "3.JPG" },
  ];

const ProjectComponent = () => {

    return(
        <Project>
            <MainTitle>PROJECT</MainTitle>
            <SubTitle>
                <Content>
                    <ContentTitle> ㅡ portfolio ㅡ</ContentTitle>
                    <ContentImage>
                        <SimpleImageSlider
                            width={800}
                            height={504}
                            images={images}
                            showNavs= {true}
                            navStyle={2}
                            showBullets={true}
                        /> 
                    </ContentImage>
                    <Text>
                        <TextDetail>포트폴리오 용도로 제작한 React로 만든 웹사이트입니다. 프론트엔드 개발 후 배포도 경험해 볼 수 있었던 프로젝트입니다.</TextDetail>
                        <TextBox>
                            <TextTitle>주요기능</TextTitle>
                            <TextDetail>간단한 자기소개, 인적 사항, 보유 기술 스택 및 프로젝트 경험 등을 담고 있습니다.</TextDetail>
                        </TextBox>
                        <TextBox>
                            <TextTitle>GitHub</TextTitle>
                            <TextDetail>https://github.com/Choiseungyeon534/Porfolio_2021</TextDetail>
                        </TextBox>
                        <TextBox>
                            <TextTitle>도메인</TextTitle>
                            <TextDetail>https://BBoo</TextDetail>
                        </TextBox>
                        <TextBox>
                            <TextTitle>Front-end</TextTitle>
                            <TextDetail>React</TextDetail>
                        </TextBox>
                    </Text>
                </Content>
            </SubTitle>
                 
        </Project>
    );
}

export default ProjectComponent;