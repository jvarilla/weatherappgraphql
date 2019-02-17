import React from "react"
import { Link, StaticQuery, graphql, style } from "gatsby"
import Header from "../components/header"
import DailyWeatherCard from "../components/dailyweathercard"
import CardContainer from "../components/cardcontainer"
import HourlyWeatherCard from "../components/hourlyweathercard"

// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"
import DailyWeatherCardStyles from "../components/dailyweathercard.module.css"
import WeatherNavigation from "../components/weathernavigation"
class HourlyWeather extends React.Component {
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
			    hourly{
			      data{
			        time
			        temperature
			        precipProbability
			      }
   				}
			  }
			 }`}

			render ={(data) => (
				<WeatherNavigation>
					<div>
						<h1>Hourly</h1>
						<CardContainer>
							{
								data.weatherData.hourly.data.map(function(name, index) {
									return(
										<HourlyWeatherCard  className={DailyWeatherCardStyles.weathercardvertical} key={index} dailyWeatherData={name} />);
								})
							}
						</CardContainer>	
					</div>
				</WeatherNavigation>
				)}
			/>
		)}
}

export default HourlyWeather;

