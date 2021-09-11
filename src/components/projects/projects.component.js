import React from "react"

import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsText,
  ProjectsBlock,
} from "./projects.styles.js"

import Project from "../../components/project/project.component"
import Separator from "../separator/separator.component"

import projectsData from "../../projects-data"

const Projects = () => {
  return (
    <ProjectsBlock id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <Separator />
      <ProjectsText>
        {`These are some of the projects I have been working on. You can click on
        the arrow icon to open their website the github icon to open the source
        code :)`}
      </ProjectsText>
      <ProjectsContainer>
        {projectsData.map((project, index) => (
          <Project projectData={project} key={index} />
        ))}
      </ProjectsContainer>
    </ProjectsBlock>
  )
}

export default Projects
