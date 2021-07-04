import * as React from "react"

import "./header.styles.scss"

import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"

import ContactButton from "../contact-button/contact-button.component"

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <p className="greeting">Hi, my name is</p>
      <p className="name">
        <span>Noel Covarrubias </span>
        {window.innerWidth < 1450 ? <br /> : null}
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
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.twitter.com/No3l_Codes"
          target="_blank"
          className="icon"
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/noelcodes/"
          target="_blank"
          className="icon"
          rel="noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
      <ContactButton text="Contact Me" />
    </div>
  )
}

export default HeaderComponent
