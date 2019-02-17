import React from "react"
import { Link, StaticQuery, graphql, style } from "gatsby"
import Calendar from './calendar.js';
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"
import DailyWeatherCardStyles from "../components/dailyweathercard.module.css"
import WeatherNavigation from "../components/weathernavigation"
class CurrentWeather extends React.Component {
	constructor(props) {
		super(props);
	}

	onComponentDidMount() {
		console.log(this.state.x);
	}

	focusOnDay = (data) => {
		this.setState({dayOfWeatherData: data}, () => {
			console.log(this.state.dayOfWeatherData);
		});
	}

	render() {
		return (
		  <StaticQuery query={graphql`query{
			openWeather {
			    name
			    sys {
			      country
			      message
			    }
			    coord{
			      lon
			      lat
			    }
			    weather {
			      main
			      description
			    }
		 	}
		     weatherData {
			    currently{
			      summary
			      time
			      temperature
			    }
		  	}
		}`}

		render ={(data) => (
				<div>
					<h1>{`${data.openWeather.name} ${data.openWeather.sys.country}`}</h1>
					<h3>{(new Date(data.weatherData.currently.time * 1000)).toLocaleString()}</h3>	
					<h1>{data.weatherData.currently.temperature}°F</h1>
					<p>{data.weatherData.currently.summary}</p>
					<p>{data.openWeather.weather.description}</p>
				</div>
				)}
			/>
		)}
}

export default CurrentWeather;

