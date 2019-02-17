import React from 'react';
import style from 'gatsby';
import DailyWeatherCardStyles from "./dailyweathercard.module.css"
//import Calendar from 'calendar';
export default (props) => {
	return <div className={DailyWeatherCardStyles.cardcontainer}>
		{props.children}
	</div>
}