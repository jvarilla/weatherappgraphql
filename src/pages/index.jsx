import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default () => (
  <div /*style={{ color: `purple` }} */>
    <Header headerText="Hello Weather!" />
    <ul>
    <li><Link to="/">Home</Link></li> 
    <li><Link to="/darkabout/">DarkSky Home</Link> </li>
    <li><Link to="/openabout/">OpenWeather Home</Link> </li>
      </ul>
    </div>
)