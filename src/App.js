import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/">
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
