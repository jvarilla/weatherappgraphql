import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/darklayout"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      Using DarkSky as the weather data source.
    </p>
  </Layout>
)
