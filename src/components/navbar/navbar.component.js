import * as React from "react"

import { Link } from "gatsby"

import { useState } from "react"

import "./navbar.styles.scss"

const NavBar = () => {
  const [hidden, toggleHidden] = useState(true)

  const onClick = () => {
    toggleHidden(!hidden);
  }

  return (
    <div>
      <div className={hidden ? "open-menu" : "open-menu active"}>
        <span className="close-icon" onClick={onClick}>
          &#x2716;
        </span>
        <span>
          <Link to="/about" className="navbar-link" onClick={onClick}>
            ABOUT
          </Link>
        </span>
        <span>
          <Link to={"/"} className="navbar-link" onClick={onClick}>
            PROJECTS
          </Link>
        </span>
        <span>
          <Link to="/contact" className="navbar-link" onClick={onClick}>
            CONTACT
          </Link>
        </span>
      </div>
      <nav className="navbar">
        <Link to="/" className="navbar-title">NO3L CODES</Link>
        <div className="hamburger-menu" onClick={onClick}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
