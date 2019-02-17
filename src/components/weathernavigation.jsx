import React from 'react';
import {style, Link} from 'gatsby';
//import Calendar from 'calendar';
import WeatherNavigationStyles from './weathernavigation.module.css'
export default (props) => {
	return <div className={WeatherNavigationStyles.weathernavigation}>
			<Link to="/"><div className={WeatherNavigationStyles.tab}>
				Home
			</div></Link>
			<Link to="/dailyweather/"><div className={WeatherNavigationStyles.tab}>
				10 Day
			</div></Link>
			<Link to="/hourlyweather/"><div className={WeatherNavigationStyles.tab}>
				Hourly
			</div></Link>
			{props.children}
	</div>
}