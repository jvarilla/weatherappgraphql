import React from 'react';
import style from 'gatsby';
import Calendar from './calendar.js';
import DailyWeatherCardStyles from "./dailyweathercard.module.css"

export default ({ key, dailyWeatherData}) => {
	const theDate = new Date(dailyWeatherData.time * 1000);//Time is in seconds convert it to millesconds
	return <div className={DailyWeatherCardStyles.weathercardvertical} >
			<h3>
				<span>{Calendar.daysOfWeek[theDate.getDay()] }</span>&nbsp;
				<span>{Calendar.months[theDate.getMonth()] } </span>&nbsp;
				<span>{theDate.getDate() }</span>&nbsp;|&nbsp;
				<span>{Calendar.hours[theDate.getHours()] }</span>&nbsp;|&nbsp;
				<span>{dailyWeatherData.temperature}°F</span>&nbsp;|&nbsp;
				<span>Precip: {(dailyWeatherData.precipProbability * 100).toFixed(1)}%</span>
			</h3>
	</div>
}