import {OPEN_MODAL, CLOSE_MODAL} from "./modalTypes"
export const openModal = (course) => {
	return {
		type: OPEN_MODAL,
		payload: course,
	};
};

export const closeModal = () => {
	return {
		type: CLOSE_MODAL,
	};
};
