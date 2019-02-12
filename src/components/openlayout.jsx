import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
    openWeather{
      coord{
        lon
        lat
      
      }
      weather {
        id
        main
        description
        icon
      }
      dt
      wind {
        speed
        deg
      }
      name
    }
  }`
}
    render={data => (
  <div>
        <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
        {/* <Link to="/">Home    </Link>  */}
     <h3><ul>
            <li><h3>City Name: {data.openWeather.name}</h3></li>
            <li><h3>City Coord lat: {data.openWeather.coord.lat}</h3></li>
            <li><h3>City Coord lon: {data.openWeather.coord.lon}</h3></li>
     </ul></h3> 
	
  </div>
    )}
  />
    )