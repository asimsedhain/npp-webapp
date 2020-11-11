import {
	MOVE_COURSE,
	FETCH_COURSES_INIT,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_FAILURE,
} from "./coursesTypes";

import data from "../../components/dashboard/data.json";

const courseData = data.map(courseMap);
const initialCoursesState = {
	planning: courseData,
	enrolled: [],
	completed: [],
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
		default:
			return state;
	}
}

function courseMap(course) {
	let temp = { ...course };
	temp.tags = [];
	temp.labels = [];
	if (temp.courseNumber < 3000) {
		temp.tags.push({
			name: "Lower Level",
			color: "#494949",
		});
	} else {
		temp.tags.push({
			name: "Upper Level",
			color: "#E59804",
		});
	}
	temp.tags.push({
		name: "Prerequisite: Unsatisfied",
		color: "#FF0000",
	});
	temp.labels.push({ name: "Spring 2021", color: "#46F446" });
	temp.name = `${temp.id}: ${temp.name}`;
	return temp;
}

export default coursesReducer;
