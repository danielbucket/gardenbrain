import './style.css';

const widget = props => {
	const state = {
		RH: Math.round(props.humidity),
		Temperature: Math.round(props.temperature) + " °F",
		TimeStamp: props.timeStamp,
		VPD: props.vpd,
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