import React from 'react';
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";

const Project = styled.div`
  height:120vh;
  background-color:violet;
`;

const images = [
    { url: "1.JPG" },
    { url: "2.JPG" },
    { url: "3.JPG" },
  ];

const ProjectComponent = () => {

    return(
        <Project>
            <SimpleImageSlider
                width={1000}
                height={504}
                images={images}
                showNavs= {true}
                navStyle={2}
                showBullets={true}
            />      
        </Project>
    );
}

export default ProjectComponent;