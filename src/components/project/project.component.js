import React from "react"

// import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"

import {
  ProjectContainer,
  ImageContainer,
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
      <ImageContainer>
        <Image src={img} alt="project" />
      </ImageContainer>
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
