import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import LandingPage from "./components/landingPage/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<StylesProvider injectFirst>
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
			</StylesProvider>
		</div>
	);
}

export default App;
