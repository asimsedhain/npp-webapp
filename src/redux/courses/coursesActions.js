import axios from "axios";
import {
	MOVE_COURSE,
	FETCH_COURSES_INIT,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_FAILURE,
	SORT_LIST_BY_NAME,
	SORT_LIST_BY_LEVEL,
} from "./coursesTypes";

export const moveCourse = (source, destination) => {
	return {
		type: MOVE_COURSE,
		payload: { source, destination },
	};
};

export const sortListByName = (listName) => {
	return {
		type: SORT_LIST_BY_NAME,
		payload: listName,
	};
};
export const sortListByLevel = (listName) => {
	return {
		type: SORT_LIST_BY_LEVEL,
		payload: listName,
	};
};

export const fetchCourseInit = () => {
	return { type: FETCH_COURSES_INIT };
};

export const fetchCourseSuccess = (courses) => {
	return { type: FETCH_COURSES_SUCCESS, payload: courses };
};

export const fetchCoursesFailure = (error) => {
	return { type: FETCH_COURSES_FAILURE, payload: error };
};

export const fetchCourse = () => {
	return (dispatch, getState) => {
		const { loading } = getState();
		if (loading) {
			return;
		}
		dispatch(fetchCourseInit());
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/courses/MATH`)
			.then((response) => {
				const data = response.data;
				if (data && data.length && data.length > 0) {
					dispatch(fetchCourseSuccess(data));
					return;
				}

				dispatch(fetchCoursesFailure("No Course Found"));
			})
			.catch((error) => {
				console.log(error);
				dispatch(fetchCoursesFailure("Error Loading Data"));
			});
	};
};
