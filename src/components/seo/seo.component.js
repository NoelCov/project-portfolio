import * as React from "react"
import { Helmet } from "react-helmet"

import Image from "../../images/image.jpg";

const Seo = () => {
  return (
    <Helmet>
      <title>Noel Covarrubias - Web Developer - No3l Codes</title>
      <meta
        name="title"
        content="Noel Covarrubias - Web Developer - No3l Codes"
      />
      <meta
        name="description"
        content="I've always been into technology. Once I decided to get into programming everything changed in my life, I quickly realized
        that I loved creating things with my computer and this is what I want to do for the rest of my life."
      />
      <meta propert="og:url" content="https://www.no3lcodes.com" />
      <meta
        property="og:title"
        content="Noel Covarrubias - Web Developer - No3l Codes"
      />
      <meta
        property="og:description"
        content="I've always been into technology. Once I decided to get into programming everything changed in my life, I quickly realized
        that I loved creating things with my computer and this is what I want to do for the rest of my life."
      />
            <meta
      property="og:img"
      content={Image}
      />
      <meta property="twitter:url" content="https://www.no3lcodes.com" />
      <meta
        property="twitter:title"
        content="Noel Covarrubias - Web Developer - No3l Codes"
      />
      <meta
        property="twitter:description"
        content="I've always been into technology. Once I decided to get into programming everything changed in my life, I quickly realized
        that I loved creating things with my computer and this is what I want to do for the rest of my life."
      />
      <meta
      property="twitter:img"
      content={Image}
      />
    </Helmet>
  )
}

export default Seo
