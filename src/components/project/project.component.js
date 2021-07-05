import React from "react"

import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { BsBoxArrowInUpRight } from "@react-icons/all-files/bs/BsBoxArrowInUpRight"

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
    <div className="project">
      <div className="image-container">
        <img src={img} className="image" alt="project" />
      </div>
      <h2 className="project-title">{title}</h2>
      <span className="text">{text}</span>
      <div className="icons-container">
        <a
          href={projectWebsite}
          target="_blank"
          className="icon"
          rel="noopener noreferrer"
        >
          <BsBoxArrowInUpRight />{" "}
        </a>
        <a
          className="icon"
          href={projectRepo}
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  )
}

export default Project
