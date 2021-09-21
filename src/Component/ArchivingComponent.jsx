import React from 'react';
import styled from 'styled-components';
import '../App.css';

const Archive = styled.div`
    background-color: #F5F5F5;
    height: 80vh;
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
    
`;

const Content = styled.div`
    width: 50vh;
    height: 40vh;
    background-color: black;
    color: white;
    border-radius: 30px;
    margin: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentTitle = styled.div`
    margin: 25px;
    font-size: 30px;
    font-weight: bold;
`;


const ArchivingComponent = () => {
    return(
        <Archive>
            <MainTitle>ARCHIVING</MainTitle>
            <SubTitle>
                <Content>
                    <ContentTitle>GitHub</ContentTitle>
                    <a href="https://github.com/Choiseungyeon534">https://github.com/Choiseungyeon534</a>
                    <div>: 소스 코드 저장소입니다.</div>
                    <div>   - 프로젝트 소스 코드  </div>
                    <div>   - 클론 코딩 소스 코드  </div>
                </Content>
                <Content>
                    <ContentTitle>BLOG</ContentTitle>
                    <a href="https://blog.naver.com/joyblue96">https://blog.naver.com/joyblue96</a>
                    <div>: 알고리즘 및 CS지식 공유 목적의 블로그입니다.</div>
                    <div> - 백준, 프로그래머스 풀이 </div>
                    <div> - 자격증 정보 공유 </div>
                </Content>
                <Content>
                    <ContentTitle>백준 랭크</ContentTitle>
                    <a href="https://solved.ac/profile/tmddus4709">https://solved.ac/profile/tmddus4709</a>
                    <div>: 백준 알고리즘 랭킹 </div>
                    <div> - GOLD </div>
                </Content>
            </SubTitle>
        </Archive>
    );
}

export default ArchivingComponent;