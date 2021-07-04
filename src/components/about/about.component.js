import * as React from "react"

import "./about.styles.scss"

const About = () => {
  return (
    <div id="#about" className="about-container">
      <div className="about-title">About Me</div>
      <hr className="decoration-line" />
      <span className="about-me-text">
        My name is Noel Covarrubias but you can call me
        <span className="nickname"> No3l Codes. </span>I got into programming
        about a year ago and I decided to self-learn it. At first I didn't
        really know what path to take so I started with Python and it was really
        fun and all but then I got into web development and finally I decided to
        go for a full-stack route so I call myself a 
        <span className="nickname"> Software Engineer</span>
      </span>
      <div className="skills-title">Technologies I've used recently</div>
      <hr className="decoration-line" />
      <div className="skills-container">
        <span className="skill">- Javascript (ES6+)</span>
        <span className="skill">- React JS</span>
        <span className="skill">- Gatsby JS</span>
        <span className="skill">- Node JS</span>
        <span className="skill">- Redux</span>
      </div>
    </div>
  )
}

export default About
