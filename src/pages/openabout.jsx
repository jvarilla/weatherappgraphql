import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/openlayout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      Using OpenWeather as the weather data source.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`