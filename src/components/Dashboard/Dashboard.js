import { React, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import DashboardControls from './DashboardControls/DashboardControls.js';
import widget from './widget/widget.js';
// const arborCraftLogo = require('./ArborCraft_horizontal.png');
// const arborCraftLogo = require('./ArborCraft_circle.png');
const arborCraftLogo = require('./ArborCraft_vertical.png');

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
		this.widget = widget.bind(this);
	};

	updateState(props) {
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

	render() {
		// this.startTimer();
		const state = this.state;
		const widgetBuild = widget(state);

		return (
			<div className="dashboard">
				<div className="background-image" style={{ backgroundImage:`url(${arborCraftLogo})` }}></div>

				<div className="right-side-container">

					<div className="dashboard-header">
						<div className="dashboard-text-container">
							<div className="dashboard-text">Garden Brain</div>
							<div className="dashboard-subtext">"For the brain, by the brain." --Dr. Brian McBrainbrane</div>
						</div>

						<DashboardControls updateButton={this.updateState}/>
					</div>

					<div className="widget-build-container">{widgetBuild}</div>

				</div>

			</div>
		);
	};
};

export default Dashboard;

