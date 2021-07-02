import * as React from "react"

import "./header.styles.scss"

import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <p className="greeting">Hello, I'm</p>
      <p className="name">
        Noel Covarrubias
        <br />
        aka No3l Codes
      </p>
      <p className="subtitle">
        I'm a <span className="title">Software Engineer</span>
      </p>

      <div className="icons-container">
        <hr />
        <a
          href="https://www.github.com/noelcov/"
          target="_blank"
          className="icon"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.twitter.com/No3l_Codes"
          target="_blank"
          className="icon"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/noelcodes/"
          target="_blank"
          className="icon"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  )
}

export default HeaderComponent
