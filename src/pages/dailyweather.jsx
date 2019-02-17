import React from "react"
import { Link, StaticQuery, graphql, style } from "gatsby"
import Header from "../components/header"
import DailyWeatherCard from "../components/dailyweathercard"
import CardContainer from "../components/cardcontainer"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"
import DailyWeatherCardStyles from "../components/dailyweathercard.module.css"
import WeatherNavigation from "../components/weathernavigation"
class DailyWeather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 'hi',
			dayOfWeatherData: {
				temperatureLow: "low"
			}
		}
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
		  <StaticQuery 
		  	query={graphql`query{
			  weatherData{
			    latitude
			    longitude
			    locationName
			    daily {
			      summary
			      data {
			        time
			        temperatureHigh
			        temperatureLow
			        precipProbability
			        precipType
			      }
			    }
			  }
			}`}

			render ={(data) => (
				<WeatherNavigation>
					<div>
						<h1>8 Day Forecast</h1>
						<CardContainer>
							{
								data.weatherData.daily.data.map(function(name, index) {
									return <DailyWeatherCard  className={DailyWeatherCardStyles.weathercard} key={index} dailyWeatherData={name} />;
								})
							}
						</CardContainer>	
					</div>
				</WeatherNavigation>
				)}
			/>
		)}
}

export default DailyWeather;

