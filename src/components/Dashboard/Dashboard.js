import { 	React, Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import DashboardControls from './DashboardControls/DashboardControls.js';
import widget from './widget/widget.js';
import { gardenDataFetch } from '../../tools/apiFetches.js';
const arborCraftLogo = require('./media/ArborCraft_vertical.png');

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			humidity: null,
			temperature: null,
			time: null,
			vpd: null,
		};

		this.updateState = this.updateState.bind(this);
		this.widget = widget.bind(this);
		this.gardenDataFetch = gardenDataFetch.bind(this);
	};

	componentDidMount() {
		this.updateState();
	};

	updateState() {
		const oldState = this.state;
		let newState = gardenDataFetch();


		Object.assign(oldState, newState);
		this.setState(newState);
	};

	render() {
		const state = this.state;
		const widgetBuild = widget(state);

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

