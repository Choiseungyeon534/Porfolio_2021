import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AboutComponent from './Component/AboutComponent';
import MainComponent from './Component/MainComponent';
import SkillComponent from './Component/SkillComponent';
import ProjectComponent from './Component/ProjectComponent';
import ArchivingComponent from './Component/ArchivingComponent';

const Background = styled.div`
  background-color:black;
  height:4000px;
`;

const Footer = styled.div`
  background-color: black;
  height: 90px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
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
      document.getElementById("header").style.boxShadow= '0 0 30px #f3f1f1';
    } else {
      document.getElementById("header").style.background = 'none';
      document.getElementById("header").style.boxShadow= 'none';
    }
  
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  console.log(scrollY)
  return(
    
    <Background>
      <MainComponent />
      <AboutComponent/>
      <SkillComponent/>
      <ProjectComponent/>
      <ArchivingComponent/>
      <Footer>
        <div>ⓒ2021.Choi Seung Yeon.All rights reserved.</div>
      </Footer>
    </Background>
  );
}

export default App;