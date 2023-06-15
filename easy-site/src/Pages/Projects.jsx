
import ProjectComponent from "../Components/ProjectComponent.tsx";


import Page from "./Page.jsx";
import React from "react";

import logo from "../Resources/logo.svg";
function Projects(props) {
    return (
        <Page color={props.color} {...props} titleKey="menu.projects">
          
            <ProjectComponent Client="Tarzanello s.r.a." Year="42069" DescriptionKey="deployedProjects.Tarzanello" SkillsKey="deployedProjects.TarzanelloSkills" src={logo} title="tarzanelli Image" />
        </Page>
    );
}

export default Projects;