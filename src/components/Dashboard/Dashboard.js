import { React, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
// import acInfinityParser from './tools/acInfinityParser.js';

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			vpd: 0,
			//counter should be removed when live status feeds are being used
			counter: 0,
			humidity: 0,
			temperature: 0,
			timeStamp: 0,
		};

		this.updateState = this.updateState.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.widget = this.widget.bind(this);
	};

	updateState() {
		const sensorData = this.props.sensorData;
		const newState = {};

		let counter = this.state.counter;
		let dataObject = sensorData[counter];
		counter++;

		dataObject.map((curVal, i) => {
			const key = Object.keys(curVal);
			const value = Object.values(dataObject[i])[0];

			Object.assign(newState, { [key]:value });
		});

		Object.assign(newState, { counter:counter });
		this.setState(newState);
	};

	startTimer() {
		setTimeout(() => {
			this.updateState();
		}, 1000);
	};

	widget() {
		let state = this.state;
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

	render() {
		// this.startTimer();

		const build = this.widget();

		return (
			<div className="dashboard">
				<div className="dashboard-header">
					<div className="dashboard-text">Dashboard</div>
					<div className="btn-container">
						<button className="btn" onClick={() => this.updateState()}>Refresh</button>
					</div>
				</div>

				<div className="data-display-container">
					{build}
				</div>
			</div>
		);
	};
};

export default Dashboard;

