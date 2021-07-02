import * as React from "react"

import { Link } from "gatsby"

import { useState } from "react"

import "./navbar.styles.scss"

const NavBar = () => {
  const [hidden, toggleHidden] = useState(true)

  return (
    <div>
      <div className={hidden ? "open-menu" : "open-menu active"}>
        <span className="close-icon" onClick={() => toggleHidden(!hidden)}>
          &#x2716;
        </span>
        <span>
          <Link to={"/"} className="navbar-link">
            ABOUT
          </Link>
        </span>
        <span>
          <Link to={"/"} className="navbar-link">
            PROJECTS
          </Link>
        </span>
        <span>
          <Link to={"/"} className="navbar-link">
            CONTACT
          </Link>
        </span>
      </div>
      <nav className="navbar">
        <span className="navbar-title">NO3L CODES</span>
        <div className="hamburger-menu" onClick={() => toggleHidden(!hidden)}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
