import './style.css';

const DashboardControls = props => {
	const { updateButton } = props;

	return(
		<div className="dashboard-controls-container">
			<button className="update-btn dashboard-control-btn" onClick={() => updateButton()}>Update</button>
			<button className="temp-btn dashboard-control-btn" onClick={() => console.log("temp button")}>Temperature</button>
			<button className="humidity-btn dashboard-control-btn" onClick={() => console.log("humidity button")}>Humidity</button>
			<button className="time-btn dashboard-control-btn" onClick={() => console.log("time button")}>Time</button>
			<button className="vpd-btn dashboard-control-btn" onClick={() => console.log("vpd button")}>VPD</button>
		</div>
	);
};

export default DashboardControls;