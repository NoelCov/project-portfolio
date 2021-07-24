import React from "react"

// import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"

import {
  ProjectContainer,
  ImageContainer,
  Image,
  ProjectTitleContainer,
  TextContainer,
  ViewProjectLink,
} from "./project.styles"

const Project = projectData => {
  const { title, text, img, projectWebsite } = projectData.projectData

  return (
    <ProjectContainer>
      <ImageContainer>
        <Image src={img} alt="project" />
      </ImageContainer>
      <ProjectTitleContainer>{title}</ProjectTitleContainer>
      <TextContainer>{text}</TextContainer>
      <ViewProjectLink href={projectWebsite} target="_blank">View Project</ViewProjectLink>
    </ProjectContainer>
  )
}

export default Project
