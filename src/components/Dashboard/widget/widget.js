import './style.css';

const widget = props => {
	let state = props;
	// re-assigning state like this is a cheap workaround. future iterations should replace "state" with more dynamic code.
	state = {
		humidity: state.humidity,
		temperature: state.temperature,
		timeStamp: state.timeStamp,
		vpd: state.vpd,
	};

	return Object.keys(state).map((curVal,i) => {
		const text = curVal.slice(0,1).toUpperCase() + curVal.slice(1);

		return (
			<div className={`widget-container ${curVal.toLowerCase()}`} key={i}>
				<div className="widget-name">{text}:</div>
				<div className="widget-value"> {state[curVal]}</div>
			</div>
		);
	});
};

export default widget;