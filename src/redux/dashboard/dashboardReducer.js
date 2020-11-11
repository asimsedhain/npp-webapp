import {
	OPEN_GRAPH_VIEW,
	OPEN_PANEL_VIEW,
	OPEN_DEFAULT_VIEW,
	SET_SEARCH_KEY,
} from "./dashboardTypes";

import { DEFAULT_VIEW } from "./dashboardActions";

const initialDashboardState = {
	view: DEFAULT_VIEW,
	searchKey: "",
};

function dashboardReducer(state = initialDashboardState, { type, payload }) {
	switch (type) {
		case OPEN_DEFAULT_VIEW:
			return { ...state, view: payload };
		case OPEN_GRAPH_VIEW:
			return { ...state, view: payload };
		case OPEN_PANEL_VIEW:
			return { ...state, view: payload };
		case SET_SEARCH_KEY:
			return {
				...state,
				searchKey: payload,
			};
		default:
			return state;
	}
}

export default dashboardReducer;
