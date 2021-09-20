import React,{useEffect, useState} from "react";
import styled from "styled-components";
import '../SkillComponent.css';

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
    margin: 40px;
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
    background-color: white;
    margin: 10px;
    align-items: center;
    border-radius: 10px;
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
                        <img className="image" src="spring.png" ></img>
                        <img className="image" src="nodejs.png"></img>
                    </Contentmini>
                    <Contentmini>
                        <Text>Version Control</Text>
                        <img className="image" src="git.png"></img>
                        <img className="image" src="github.png"></img>
                    </Contentmini>
                </Content>
                <Content>

                    <Contentmini>
                        <Text>Front-end</Text>
                        <img className="image" src="html.png"></img>
                        <img className="image" src="sass.png"></img>
                        <img className="image" src="react.png"></img>
                        <img className="image" src="jquery.png"></img>
                    </Contentmini>
                </Content>
                <Content>
                    <Contentmini>
                        <Text>Database</Text>
                        <img className="image" src="oracle.png"></img>
                        <img className="image" src="mysql.png"></img>
                        <img className="image" src="mongo db.png"></img>
                    </Contentmini>
                    <Contentmini>
                        <Text>Certificate</Text>
                        <img className="image" src="qnet.JPG"></img>
                        <img className="image" src="adsp.JPG"></img>
                        <img className="image" src="sqld.JPG"></img>
                    </Contentmini>
                </Content>
                
            </SubTitle>
        </Skill>
    );
}

export default SkillComponent;