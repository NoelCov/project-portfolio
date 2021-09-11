import * as React from "react"

import "./about.styles.scss"

import Separator from "../separator/separator.component"

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-title">About Me</div>
      <Separator />
      <span className="about-text">
        My name is Noel Covarrubias also known as
        <span className="about-text nickname"> No3l Codes. </span>I got into programming
        about a year ago. I'm very passionate about it and I want to do this for
        the rest of my life.
      </span>
      <div className="skills-title">Technologies I've used recently</div>
      <Separator />
      <div className="skills-container">
        <span className="skill">- Javascript</span>
        <span className="skill">- React</span>
        <span className="skill">- Express</span>
        <span className="skill">- Node</span>
        <span className="skill">- Redux</span>
        <span className="skill">- mongoDB</span>
        <span className="skill">- SQL</span>
        <span className="skill">- Python</span>
      </div>
    </div>
  )
}

export default About
