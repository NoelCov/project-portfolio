import * as React from "react"

import { Helmet } from "react-helmet"

const Seo = ({ description }) => {
  return (
    <Helmet>
      <title>Noel Covarrubias - Software Engineer - No3l Codes</title>
      <meta
        name="title"
        content="Noel Covarrubias - Software Engineer - No3l Codes"
      />

      <meta name="description" content="Noel Covarrubias Portfolio" />
    </Helmet>
  )
}

export default Seo
