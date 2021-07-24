import React from "react"

import {
  ProjectsContainerDiv,
  ProjectsTitleContainer,
  DecorationLine,
  ProjectsTextContainer,
  ProjectsFlexContainer,
} from "./projects.styles"

import Project from "../../components/project/project.component"

import projectsData from "../../projects-data"

const Projects = () => {
  return (
    <ProjectsContainerDiv id="projects">
      <ProjectsTitleContainer>My Projects</ProjectsTitleContainer>
      <DecorationLine />
      <ProjectsTextContainer>
        {`These are some of the projects I have been working on. You can click on
        the arrow icon to open their website the github icon to open the source
        code :)`}
      </ProjectsTextContainer>
      <ProjectsFlexContainer>
        {projectsData.map((project, index) => (
          <Project projectData={project} key={index} />
        ))}
      </ProjectsFlexContainer>
    </ProjectsContainerDiv>
  )
}

export default Projects
