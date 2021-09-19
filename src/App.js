import React from 'react';
import styled from 'styled-components';
import MainComponent from './Component/MainComponent';

const Background = styled.div`
  background-color:red;
  height:9000px;
`;

const About = styled.div`
  height:300px;
  background-color:yellow;
`;
const Skill = styled.div`
  height:300px;
  background-color:black;
`;
const Project = styled.div`
  height:300px;
  background-color:violet;
`;
const Careers = styled.div`
  height:300px;
  background-color:white;
`;


const App = () => {

  return(
    <Background>
      <MainComponent />
      <About>
          about뿌니
      </About>
      <Skill>
        Skills
      </Skill>
      <Project>
        프로젝트
      </Project>
      <Careers>
        career
      </Careers>
    </Background>
  );
}

export default App;