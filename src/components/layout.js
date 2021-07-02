import * as React from "react"

import "./layout.css"

import NavBar from "./navbar/navbar.component"
import Seo from "./seo/seo.component"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <NavBar />
      <div className="children"> {children} </div>
    </>
  )
}

export default Layout
