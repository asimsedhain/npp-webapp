import {
	MOVE_COURSE,
	FETCH_COURSES_INIT,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_FAILURE,
	SORT_LIST_BY_NAME,
	SORT_LIST_BY_LEVEL,
	SORT_LIST_BY_SEMESTER,
	SORT_LIST_BY_PREREQUISITE,
	FETCH_USER_COURSES_INIT,
	FETCH_USER_COURSES_FAILURE,
	FETCH_USER_COURSES_SUCCESS,
} from "./coursesTypes";

const initialCoursesState = {
	planning: [],
	enrolled: [],
	completed: [],
	completedSet: new Set(),
	coursesSet: new Set(),
	server: [],
	sidePanelLoading: false,
	sidePanelError: "",
	userCourseLoading: false,
	userCourseError: "",
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
			return { ...state, sidePanelLoading: true, sidePanelError: "" };
		case FETCH_COURSES_SUCCESS:
			const result = payload.filter(course => !state.coursesSet.has(course.id))
			return {
				...state,
				server: result,
				sidePanelLoading: false,
				sidePanelError: "",
			};
		case FETCH_COURSES_FAILURE:
			return {
				...state,
				server: [],
				sidePanelLoading: false,
				sidePanelError: payload,
			};
		case FETCH_USER_COURSES_INIT:
			return { ...state, userCourseLoading: true, userCourseError: "" };
		case FETCH_USER_COURSES_FAILURE:
			return {
				...state,
				userCourseLoading: false,
				userCourseError: payload,
			};
		case FETCH_USER_COURSES_SUCCESS:
			const [planning, enrolled, completed] = [[], [], []];
			for (const course of payload) {
				state.coursesSet.add(course.id)
				if (course.column.toLowerCase() === "planning") {
					planning.push(course);
				}
				if (course.column.toLowerCase() === "enrolled") {
					enrolled.push(course);
				}
				if (course.column.toLowerCase() === "completed") {
					state.completedSet.add(course.id);
					completed.push(course);
				}
			}
			return {
				...state,
				planning,
				enrolled,
				completed,
				userCourseError: "",
				userCourseLoading: false,
			};
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
