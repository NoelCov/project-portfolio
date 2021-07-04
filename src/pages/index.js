import * as React from "react"

import Layout from "../components/layout"

import HeaderComponent from "../components/header/header.component"
import About from "../components/about/about.component"
import Projects from "../components/projects/projects.component"
import Contact from "../components/contact/contact.component"
import NavBar from "../components/navbar/navbar.component"

const IndexPage = () => (
  <>
    <NavBar />
    <Layout>
      <HeaderComponent />
      <About />
      <Projects />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
