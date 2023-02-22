import './style.css';

const widget = props => {
	const timeStamp = new Date(props.timeStamp);

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
		TimeStamp: newTimeStamp,
		RH: Math.round(props.humidity) + "%",
		VPD: props.vpd,
		Temperature: Math.round(props.temperature) + "°F",
	};

	return Object.keys(state).map((curVal,i) => {
		return (
			<div className={`widget-container ${curVal.toLowerCase()}`} key={i}>
				<div className="widget-name">{curVal}:</div>
				<div className="widget-value"> {state[curVal]}</div>
			</div>
		);
	});
};

export default widget;