import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import modalReducer from "./modal/modalReducer";
import dashboardReducer from "./dashboard/dashboardReducer"
import coursesReducer from "./courses/coursesReducer"

const rootReducer = combineReducers({
	modal: modalReducer,
	dashboard: dashboardReducer,
	courses: coursesReducer
});
const store = createStore(rootReducer, applyMiddleware(logger,thunk));

export default store;
