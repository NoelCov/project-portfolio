import React from "react"

import "./contact.styles.scss"

import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"

import ContactButton from "../contact-button/contact-button.component"

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">Contact Me</div>
      <hr className="decoration-line" />
      <span className="contact-text">
        Talk to me about anything. I love meeting new people and making friends.
        I check my socials daily so I'll get back to you soon
      </span>
      <div className="socials-title">All my socials :)</div>
      <hr className="decoration-line" />
      <div className="socials-container">
        <a
          href="https://twitter.com/No3l_Codes"
          target="_blank"
          className="social"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://github.com/NoelCov/"
          target="_blank"
          className="social"
        >
          <AiOutlineGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/noelcodes/"
          target="_blank"
          className="social"
        >
          <AiOutlineLinkedin />
        </a>

        <a
          href="https://www.instagram.com/no3lcodes/"
          target="_blank"
          className="social"
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <ContactButton text="Message Me" />
    </div>
  )
}

export default Contact
