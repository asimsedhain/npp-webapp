import axios from "axios";
import {
	MOVE_COURSE,
	FETCH_COURSES_INIT,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_FAILURE,
	SORT_LIST_BY_NAME,
	SORT_LIST_BY_LEVEL,
	FETCH_USER_COURSES_INIT,
	FETCH_USER_COURSES_FAILURE,
	FETCH_USER_COURSES_SUCCESS,
} from "./coursesTypes";

export const moveCourseInState = (source, destination) => {
	return {
		type: MOVE_COURSE,
		payload: { source, destination },
	};
};

export const moveCourse = (source, destination) => {
	return (dispatch, getState) => {
		dispatch(moveCourseInState(source, destination));

		if (destination && source.droppableId !== destination.droppableId) {

			const {courses} = getState()
			const course = courses[destination.droppableId][destination.index]
			
			axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/courses`,
				{...course, column: destination.droppableId},
				{ withCredentials: true }
			);
		}
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

export const fetchCoursesInit = () => {
	return { type: FETCH_COURSES_INIT };
};

export const fetchCoursesSuccess = (courses) => {
	return { type: FETCH_COURSES_SUCCESS, payload: courses };
};

export const fetchCoursesFailure = (error) => {
	return { type: FETCH_COURSES_FAILURE, payload: error };
};

export const fetchCourses = (searchKey) => {
	return (dispatch, getState) => {
		const { sidePanelLoading } = getState();
		if (sidePanelLoading) {
			return;
		}
		dispatch(fetchCoursesInit());
		let endPoint = `${process.env.REACT_APP_BACKEND_URL}/courses/MATH`;
		if (searchKey !== "" && searchKey) {
			endPoint = `${process.env.REACT_APP_BACKEND_URL}/courses/search/${searchKey}`;
		}

		axios
			.get(endPoint, {
				withCredentials: true,
			})
			.then((response) => {
				const data = response.data;
				if (data && data.length && data.length > 0) {
					dispatch(fetchCoursesSuccess(data));
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

export const fetchUserCoursesInit = () => {
	return { type: FETCH_USER_COURSES_INIT };
};

export const fetchUserCoursesSuccess = (courses) => {
	return { type: FETCH_USER_COURSES_SUCCESS, payload: courses };
};

export const fetchUserCoursesFailure = (error) => {
	return { type: FETCH_USER_COURSES_FAILURE, payload: error };
};

export const fetchUserCourses = () => {
	return (dispatch, getState) => {
		const { userCourseLoading } = getState();
		if (userCourseLoading) {
			return;
		}
		dispatch(fetchUserCoursesInit());
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/courses/user`, {
				withCredentials: true,
			})
			.then((response) => {
				const data = response.data;
				if (data) {
					dispatch(fetchUserCoursesSuccess(data));
					return;
				}
				dispatch(
					fetchUserCoursesFailure(
						"Error!! Please Try Refreshing The Page"
					)
				);
			})
			.catch((error) => {
				console.log(error);
				dispatch(
					fetchUserCoursesFailure(
						"Error!! Please Try Refreshing The Page"
					)
				);
			});
	};
};
