import React from "react";
import styled from "styled-components";

const Skill = styled.div`
    height:1200px;
    background-color:cyan;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainTitle = styled.div`
    font-weight: bold;
    font-size: 35px;
    text-decoration: underline;
    margin: 5vh;
`;

const SubTitle = styled.div`
    display: flex;
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
`;

const SkillComponent = () => {
    
    return(
        <Skill>
           <MainTitle>Skills</MainTitle>
            <SubTitle>
                <Content>
                    <Contentmini>
                        <Text>Back-end</Text>
                        <img alt="spring" height="100px" width="200px" src="spring.png" style={{marginBottom:30}}></img>
                        <img alt="nodejs" height="100px" width="300px" src="nodejs.png" style={{marginBottom:30}}></img>
                    </Contentmini>
                    <Contentmini>
                        <Text>Version Control</Text>
                        <img alt="git" height="200px" width ="200px" src="git.png" style={{marginBottom:30}}></img>
                        <img alt="github" height="150px" width ="250px" src="github.png" style={{marginBottom:30}}></img>
                    </Contentmini>
                </Content>
                <Content>

                    <Contentmini>
                        <Text>Front-end</Text>
                        <img alt="html" height="150px" width ="300px" src="html.png" style={{marginBottom:30}}></img>
                        <img alt="sass" height="200px" width ="250px" src="sass.png" style={{marginBottom:30}}></img>
                        <img alt="react" height="150px" width ="280px" src="react.png" style={{marginBottom:30}}></img>
                        <img alt="jquery" height="215px" width ="250px" src="jquery.png" style={{marginBottom:30}}></img>
                    </Contentmini>
                </Content>
                <Content>
                    <Contentmini>
                        <Text>Database</Text>
                        <img alt="oracle" height="150px" width ="150px" src="oracle.png" ></img>
                        <img alt="mysql" height="150px" width ="150px" src="mysql.png" ></img>
                        <img alt="mongo" height="100px" width ="150px" src="mongo db.png" style={{marginBottom:10}}></img>
                    </Contentmini>
                    <Contentmini>
                        <Text>Certificate</Text>
                        <img alt="qnet" height="70px" width ="250px" src="qnet.JPG" style={{marginBottom:20}}></img>
                        <img alt="adsp" height="70px" width ="150px" src="adsp.JPG" style={{marginBottom:20}}></img>
                        <img alt="sqld" height="70px" width ="150px" src="sqld.JPG" style={{marginBottom:10}}></img>
                    </Contentmini>
                </Content>
                
            </SubTitle>
        </Skill>
    );
}

export default SkillComponent;