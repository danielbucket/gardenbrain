import { React, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import acInfinityParser from './tools/acInfinityParser.js';



class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			vpd: 0,
			counter: 0,
			humidity: 0,
			temperature: 0,
			timeStamp: 0,
		};

		this.updateState = this.updateState.bind(this);
		this.startTimer = this.startTimer.bind(this);
	};


	updateState() {
		const cleanedData = acInfinityParser(this.props);
		const newState = {};

		let counter = this.state.counter;
		let dataObject = cleanedData[counter];
		counter++;

		dataObject.map((curVal, i) => {
			const key = Object.keys(curVal);
			const value = Object.values(dataObject[i])[0];

			Object.assign(newState, {
				[key]: value,
			});
		});

		Object.assign(newState, {counter: counter});
		this.setState(newState);
	};

	startTimer() {
		setTimeout(() => {
			this.updateState();
		}, 1000);
	};

	render() {
		this.startTimer();

		const widget = () => {
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
					<div className={`${curVal.toLowerCase()} widget`} key={i}>{text}:
						<div className="widget-value"> {state[curVal]}</div>
					</div>
				);
			});
		};

		const build = widget();

		return (
			<div className="Dashboard">
				<button className="timer-btn widget" onClick={() => this.startTimer()}>Timer</button>
				<button className="refresh-btn widget" onClick={() => this.updateState()}>Refresh</button>
				{build}
			</div>
		);
	};
};

export default Dashboard;

