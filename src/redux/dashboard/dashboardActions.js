import {
	OPEN_GRAPH_VIEW,
	OPEN_PANEL_VIEW,
	OPEN_DEFAULT_VIEW,
	SET_SEARCH_KEY,
} from "./dashboardTypes";

export const GRAPH_VIEW = "GRAPH_VIEW";
export const PANEL_VIEW = "PANEL_VIEW";
export const DEFAULT_VIEW = "DEFAULT_VIEW";

export const openGraphView = () => {
	return { type: OPEN_GRAPH_VIEW, payload: GRAPH_VIEW };
};

export const openPanelView = () => {
	return {
		type: OPEN_PANEL_VIEW,
		payload: PANEL_VIEW,
	};
};

export const openDefaultView = () => {
	return { type: OPEN_DEFAULT_VIEW, payload: DEFAULT_VIEW };
};

export const setSearchKey = (key) => {
	return { type: SET_SEARCH_KEY, payload: key };
};
