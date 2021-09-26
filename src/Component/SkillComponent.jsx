import React from "react";
import styled from "styled-components";

const Skill = styled.div`
    background-color:#D5D5D5;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    @media only screen and (max-width : 837px){
        display: flex;
        flex-direction: column;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Contentmini = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vh;
    padding-bottom: 3vh;
    background-color: white;
    margin: 3vh;
    align-items: center;
    border-radius: 10px;
    &:hover {
        transform: scale(1.01);
    }
    box-shadow: 5px 5px 5px #353535 ;
`;

const Text = styled.div`
    font-size: 30px;
    padding: 30px;
    font-family: fantasy;
    color: crimson;
    @media only screen and (max-width : 837px){
        font-size: 1.5em;
    }
`;

const SkillComponent = () => {
    
    return(
        <Skill>
           <MainTitle>Skills</MainTitle>
            <SubTitle>
                <Content>
                    <Contentmini>
                        <Text>Back-end</Text>
                        <img alt="spring" height="320px" width="200px" src="back.png" style={{marginBottom:5}}></img>
                    </Contentmini>
                    <Contentmini>
                        <Text>Version Control</Text>
                        <img alt="git" height="200px" width ="200px" src="git.png" style={{marginBottom:30}}></img>
                        <img alt="github" height="150px" width ="250px" src="github.png"></img>
                    </Contentmini>
                </Content>
                <Content>

                    <Contentmini>
                        <Text>Front-end</Text>
                        <img alt="html" height="150px" width ="300px" src="html.png" style={{marginBottom:40}}></img>
                        <img alt="sass" height="200px" width ="250px" src="sass.png" style={{marginBottom:40}}></img>
                        <img alt="react" height="150px" width ="280px" src="react.png" style={{marginBottom:40}}></img>
                        <img alt="jquery" height="215px" width ="250px" src="jquery.png" style={{marginBottom:35}}></img>
                    </Contentmini>
                </Content>
                <Content>
                    <Contentmini>
                        <Text>Database</Text>
                        <img alt="mongo" height="350px" width ="200px" src="database.JPG" style={{marginBottom:5}}></img>
                    </Contentmini>
                    <Contentmini>
                        <Text>Certificate</Text>
                        <img alt="qnet" height="350px" width ="200px" src="certificate.png"></img>
                    </Contentmini>
                </Content>
            </SubTitle>
        </Skill>
    );
}

export default SkillComponent;