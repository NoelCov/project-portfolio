import * as React from "react"

import { Link } from "gatsby"

import { useState } from "react"

import "./navbar.styles.scss"

const NavBar = () => {
  const [hidden, toggleHidden] = useState(true)

  const onClick = () => {
    if (window.innerWidth < 1250) {
      return toggleHidden(!hidden)
    }
    return null;
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        NO3L CODES
      </Link>
      <div className={hidden ? "open-menu" : "open-menu active"}>
        <span className="close-icon" onClick={onClick}>
          &#x2716;
        </span>
        <span>
          <a href="#about" className="navbar-link" onClick={onClick}>
            ABOUT
          </a>
        </span>
        <span>
          <a href="#projects" className="navbar-link" onClick={onClick}>
            PROJECTS
          </a>
        </span>
        <span>
          <a href="#contact" className="navbar-link" onClick={onClick}>
            CONTACT
          </a>
        </span>
      </div>
      <div className="hamburger-menu" onClick={onClick}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
    </nav>
  )
}

export default NavBar
