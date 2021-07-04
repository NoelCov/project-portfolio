import React from "react"

import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"

import "./project.styles.scss"

const Project = projectData => {
  const {
    title,
    text,
    img,
    projectWebsite,
    projectRepo,
  } = projectData.projectData

  return (
    <a href={projectWebsite} target="_blank" className="project" rel="noopener noreferrer">
      <a className="icon" href={projectRepo} rel="noopener noreferrer">
        <AiOutlineGithub />
      </a>
      <div className="image" style={{ backgroundImage: `url(${img})` }} />
      <h2 className="project-title">{title}</h2>
      <span className="text">{text}</span>
    </a>
  )
}

export default Project
