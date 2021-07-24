import React from "react"

import {
  ProjectContainer,
  Image,
  ProjectTitleContainer,
  TextContainer,
  LinksContainer,
  Link,
} from "./project.styles"

const Project = projectData => {
  const {
    title,
    text,
    img,
    projectWebsite,
    projectRepo,
  } = projectData.projectData

  return (
    <ProjectContainer>
      <Image src={img} alt="project" />
      <ProjectTitleContainer>{title}</ProjectTitleContainer>
      <TextContainer>{text}</TextContainer>
      <LinksContainer>
        <Link href={projectWebsite} target="_blank">
          View Project
        </Link>
        <Link href={projectRepo} target="_blank">
          View Source Code
        </Link>
      </LinksContainer>
    </ProjectContainer>
  )
}

export default Project
