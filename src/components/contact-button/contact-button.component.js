import React from "react"

import "./contact-button.styles.scss"

const ContactButton = ({ text }) => {
  return (
    <a
      className="button"
      href="mailto:no3lcodes@gmail.com"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default ContactButton
