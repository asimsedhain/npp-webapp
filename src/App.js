import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import store from "./redux/store";

import LandingPage from "./components/landingPage/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
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
			</Provider>
		</div>
	);
}

export default App;
