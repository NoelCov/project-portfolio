import * as React from "react"

import "./about.styles.scss"

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-title">About Me</div>
      <hr className="decoration-line" />
      <span className="about-me-text">
        My name is Noel Covarrubias also known as
        <span className="nickname"> No3l Codes. </span>I got into programming
        about a year ago. I'm very passionate about it and I want to do this for
        the rest of my life.
      </span>
      <div className="skills-title">Technologies I've used recently</div>
      <hr className="decoration-line" />
      <div className="skills-container">
        <span className="skill">- Javascript</span>
        <span className="skill">- React JS</span>
        <span className="skill">- Gatsby JS</span>
        <span className="skill">- Node JS</span>
        <span className="skill">- Redux</span>
      </div>
    </div>
  )
}

export default About
