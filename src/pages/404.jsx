import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>404.html</h1>
    <p>
     Hi! Don't know what you did, but it didn't work!
    </p>
    <ul>
    <li><Link to="/">Home</Link> Start All Over! </li> 
    <li><Link to="/darkabout/">DarkSky Home</Link> </li>
    <li><Link to="/openabout/">OpenWeather Home</Link> </li>
    </ul>

  </div>
)