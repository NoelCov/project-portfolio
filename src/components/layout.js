import * as React from "react"

import "./layout.css"

import NavBar from "./navbar/navbar.component"

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
