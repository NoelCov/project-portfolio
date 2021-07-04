import * as React from "react"

import "./layout.css"

import Seo from "./seo/seo.component"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <div className="children"> {children} </div>
    </>
  )
}

export default Layout
