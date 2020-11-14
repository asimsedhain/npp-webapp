import {
	MOVE_COURSE,
	FETCH_COURSES_INIT,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_FAILURE,
	SORT_LIST_BY_NAME,
	SORT_LIST_BY_LEVEL,
	SORT_LIST_BY_SEMESTER,
	SORT_LIST_BY_PREREQUISITE,
} from "./coursesTypes";

import data from "../../components/dashboard/data.json";

const courseData = data.map(courseMap);
const initialCoursesState = {
	planning: courseData,
	enrolled: [],
	completed: [],
	completedSet: new Set(),
	server: [],
	loading: false,
	error: "",
};

function coursesReducer(state = initialCoursesState, { type, payload }) {
	switch (type) {
		case MOVE_COURSE:
			const { source, destination } = payload;
			if (!destination) {
				return state;
			}
			if (source.droppableId === destination.droppableId) {
				const newArray = Array.from(state[source.droppableId]);
				const [removed] = newArray.splice(source.index, 1);
				newArray.splice(destination.index, 0, removed);
				return { ...state, [source.droppableId]: newArray };
			}

			if (destination.droppableId === "completed") {
				state.completedSet.add(
					state[source.droppableId][source.index].id
				);
			}
			if (source.droppableId === "completed") {
				state.completedSet.delete(state.completed[source.index].id);
			}
			const newSourceArray = Array.from(state[source.droppableId]);
			const newDestinationArray = Array.from(
				state[destination.droppableId]
			);
			const [removed] = newSourceArray.splice(source.index, 1);
			newDestinationArray.splice(destination.index, 0, removed);

			return {
				...state,
				[source.droppableId]: newSourceArray,
				[destination.droppableId]: newDestinationArray,
			};
		case FETCH_COURSES_INIT:
			return { ...state, loading: true, error: "" };
		case FETCH_COURSES_SUCCESS:
			return { ...state, server: payload, loading: false, error: "" };
		case FETCH_COURSES_FAILURE:
			return { ...state, server: [], loading: false, error: payload };
		case SORT_LIST_BY_NAME:
			let sortedList = [...state[payload]];
			sortedList.sort(compareCourseByName);
			return { ...state, [payload]: sortedList };
		case SORT_LIST_BY_SEMESTER:
			//TODO
			return state;
		case SORT_LIST_BY_LEVEL:
			sortedList = [...state[payload]];
			sortedList.sort(compareCourseByLevel);
			return { ...state, [payload]: sortedList };
		case SORT_LIST_BY_PREREQUISITE:
			//TODO
			return state;
		default:
			return state;
	}
}

function courseMap(course) {
	let temp = { ...course };
	temp.tags = [];
	temp.labels = [];

	temp.labels.push({ name: "Spring 2021", color: "#46F446" });
	return temp;
}
function compareCourseByName(a, b) {
	if (a.id < b.id) {
		return -1;
	}
	if (a.id > b.id) {
		return 1;
	}
	return 0;
}
function compareCourseByLevel(a, b) {
	if (a.courseNumber > b.courseNumber) {
		return -1;
	}
	if (a.courseNumber < b.courseNumber) {
		return 1;
	}
	return 0;
}

export default coursesReducer;
