import React from "react"

import "./projects.styles.scss"

import Project from "../../components/project/project.component"

import ProjectsData from "../../projects-data"

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-title">My Projects</div>
      <hr className="decoration-line" />
      <p className="projects-text">
        These are some of the projects I have been working on. You can click on
        them to open their website and click on the github icon to open the
        source code :)
      </p>
      <div className="projects-container">
        {ProjectsData.map(project => (
          <Project projectData={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
