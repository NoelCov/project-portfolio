import * as React from "react"

import "./layout.css"

import NavBar from "./navbar/navbar.component"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="children"> {children} </div>
    </>
  )
}

export default Layout
