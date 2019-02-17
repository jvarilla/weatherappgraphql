import React from 'react';
import style from 'gatsby';
//import Calendar from 'calendar';
export default (props) => {
	return <div style={{display: 'flex', flexDirection: 'column', 
						flexWrap: 'wrap', backgroundColor:'grey', 
						alignContent: 'center', padding: '5%'}}>
		{props.children}
	</div>
}