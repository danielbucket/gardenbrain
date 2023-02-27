import './style.css';

const display = props => {
	const timeStamp = new Date(props.time);

	let hours = timeStamp.getHours();
	const amOrPm = hours >= 12 ? 'pm' : 'am';
	hours = (hours % 12) || 12;
	let minutes = timeStamp.getMinutes();
	minutes = minutes == "0" ? minutes = "00" : minutes;
	const time = hours + ":" + minutes + amOrPm;

	const year = timeStamp.getFullYear();
	const month = timeStamp.getMonth();
	const day = timeStamp.getDay();
	const date = day + "/" + month + "/" + year;

	const newTimeStamp = date + " " + time;

	const state = {
		// note that the object keys here are used as class names
		Time: newTimeStamp,
		RH: Math.round(props.humidity) + "%",
		VPD: props.vpd,
		Temp: Math.round(props.temperature) + "°F",
	};

	return Object.keys(state).map((curVal,i) => {
		return (
			<div className={`display-container ${curVal.toLowerCase()}`} key={i}>
				<div className="display-name">{curVal}:</div>
				<div className="display-value"> {state[curVal]}</div>
			</div>
		);
	});
};

export default display;