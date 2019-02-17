import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import WeatherNavigation from "../components/weathernavigation"
import CurrentWeather from "../components/currentweather"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default () => (
  <div /*style={{ color: `purple` }} */>
    <WeatherNavigation>
    <Header headerText="Hello Weather!" />
    <CurrentWeather/>
    <ul>
    <li><Link to="/">Home</Link></li> 
    <li><Link to="/dailyweather/">Daily Weather</Link></li>
    <li><Link to="/darkabout/">DarkSky Home</Link> </li>
    <li><Link to="/openabout/">OpenWeather Home</Link> </li>
      </ul>
     </WeatherNavigation>
  </div>
)