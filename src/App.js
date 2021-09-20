import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AboutComponent from './Component/AboutComponent';
import MainComponent from './Component/MainComponent';
import SkillComponent from './Component/SkillComponent';

const Background = styled.div`
  background-color:red;
  height:9000px;
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
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();

    if(scrollY > 0) {
      document.getElementById("header").style.background = 'black';
    } else {
      document.getElementById("header").style.background = 'none';
    }
  
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return(
    <Background>
      <MainComponent />
      <AboutComponent/>
      <SkillComponent/>
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