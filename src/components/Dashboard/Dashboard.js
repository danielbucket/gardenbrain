import { React, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import DashboardControls from './DashboardControls/DashboardControls.js';
import widget from './widget/widget.js';
const arborCraftLogo = require('./media/ArborCraft_vertical.png');

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			vpd: 0,
			humidity: 0,
			temperature: 0,
			timeStamp: 0,
		};

		this.updateState = this.updateState.bind(this);
		this.widget = widget.bind(this);
	};

	componentDidMount() {
		this.updateState();
	};

	updateState(props) {
		const sensorData = this.props.sensorData;
		const newState = {};

		Object.assign(newState, sensorData);
		this.setState(newState);
	};



	render() {
		const state = this.state;
		const widgetBuild = widget(state);
		const updateState = this.updateState;
		const button = (<button className="dashboard-controls-btn" onClick={() => updateState() } >Update</button>);

		return (
			<div className="dashboard">
				<img className="background-image" src={arborCraftLogo} alt="Company Logo"/>

				<div className="right-side-container">

					<div className="dashboard-header">
							<h1 className="dashboard-title">Garden Brain</h1>
							<div className="quote-container">
								<p className="dashboard-quote">"For the brain, by the brain!"</p>
								<p className="dashboard-quote-author">-Dr. Brain McBrianbrane</p>
							</div>
					</div>

					<div className="widget-build-container">{widgetBuild}</div>
				</div>

			</div>
		);
	};
};

export default Dashboard;

