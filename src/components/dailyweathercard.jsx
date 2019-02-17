import React from 'react';
import style from 'gatsby';
import Calendar from './calendar.js';
import DailyWeatherCardStyles from "./dailyweathercard.module.css"

export default ({ key, dailyWeatherData}) => {
	const theDate = new Date(dailyWeatherData.time * 1000);//Time is in seconds convert it to millesconds
	return <div className={DailyWeatherCardStyles.weathercard} >
			<h3>
				<span>{Calendar.daysOfWeek[theDate.getDay()]}</span><br/>
				<span>{Calendar.months[theDate.getMonth()]} </span>
				<span>{theDate.getDate()}</span>
			</h3>
			<h4>High: {dailyWeatherData.temperatureHigh}°F</h4>
			<h4>Low: {dailyWeatherData.temperatureLow}°F</h4>
	</div>
}