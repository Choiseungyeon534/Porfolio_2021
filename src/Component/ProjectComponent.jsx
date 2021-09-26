import React from 'react';
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";

const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#BDBDBD;
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
    @media only screen and (max-width : 837px){
        font-size: 1.5em;
    }
`;

const ContentImage = styled.div`
    margin: 20px;
    @media only screen and (max-width : 837px){
        width:40%;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-family: snas-serif;
    @media only screen and (max-width : 837px){
        width: 60%;
        margin: 1em;
    }
`;
const TextBox = styled.div`
    display: flex;
    padding: 5px;
`;
const TextTitle = styled.div`
    width: 150px;
    font-weight: bold;
`;

const TextDetail = styled.div`
    margin-bottom: 20px;
`;

const images = [
    { url: "1.JPG" },
    { url: "2.JPG" }
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
                            width={400}
                            height={300}
                            images={images}
                            showNavs= {true}
                            navStyle={2}
                            showBullets={true}
                        /> 
                    </ContentImage>
                    <Text>
                        <TextDetail>포트폴리오 용도로 제작한 React로 만든 웹사이트입니다. front-end 개발 후 배포도 경험할 수 있었던 프로젝트입니다.</TextDetail>
                        <TextBox>
                            <TextTitle>주요기능</TextTitle>
                            <>간단한 자기소개, 인적 사항, 보유 기술 스택 및 프로젝트 경험 등을 담고 있습니다.</>
                        </TextBox>
                        <TextBox>
                            <TextTitle>GitHub</TextTitle>
                            <>https://github.com/Choiseungyeon534/Porfolio_2021</>
                        </TextBox>
                        <TextBox>
                            <TextTitle>도메인</TextTitle>
                            <>https://choiseungyeon534.github.io/Porfolio_2021/</>
                        </TextBox>
                        <TextBox>
                            <TextTitle>Front-end</TextTitle>
                            <>React</>
                        </TextBox>
                    </Text>
                </Content>
            </SubTitle>
                 
        </Project>
    );
}

export default ProjectComponent;