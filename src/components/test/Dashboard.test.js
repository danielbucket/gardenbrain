import { render, screen, cleanup } from '@testing-library/react';
import Dashboard from '../Dashboard/Dashboard.js'

import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});


afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

test('should render DashboardControls	compnonet: ', () => {
	render(<Dashboard/>);
	const dashboardElement = screen.getByAltText('Company Logo');
	expect(dashboardElement).toBeInTheDocument();
});