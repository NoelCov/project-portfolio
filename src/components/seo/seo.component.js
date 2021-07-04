import * as React from "react"

import { Helmet } from "react-helmet"

const Seo = () => {
  return (
    <Helmet>
      <title>Noel Covarrubias - Software Engineer - No3l Codes</title>
      <meta
        name="title"
        content="Noel Covarrubias - Software Engineer - No3l Codes"
      />
      <meta
        name="description"
        content="I've always been into technology. Once I decided to get into programming everything changed in my life
      and I love programming, I want and will do it for the rest of my life."
      />
      <meta propert="og:url" content="https://www.no3lcodes.com" />
      <meta
        property="og:title"
        content="Noel Covarrubias - Software Engineer - No3l Codes"
      />
      <meta
        property="og:description"
        content="I've always been into technology. Once I decided to get into programming everything changed in my life
      and I love programming, I want and will do it for the rest of my life."
      />
      <meta property="twitter:url" content="https://www.no3lcodes.com" />
      <meta
        property="twitter:title"
        content="Noel Covarrubias - Software Engineer - No3l Codes"
      />
      <meta
        property="twitter:description"
        content="I've always been into technology. Once I decided to get into programming everything changed in my life
      and I love programming, I want and will do it for the rest of my life."
      />
    </Helmet>
  )
}

export default Seo
