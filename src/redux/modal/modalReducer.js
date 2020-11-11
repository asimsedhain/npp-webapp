import { OPEN_MODAL, CLOSE_MODAL } from "./modalTypes";

const initialModalState = {
	isOpen: false,
	course: null,
};

function modalReducer(state = initialModalState, { type, payload }) {
	switch (type) {
		case OPEN_MODAL:
			return {
				...state,
				isOpen: true,
				course: payload,
			};
		case CLOSE_MODAL:
			return {
				...state,
				isOpen: false,
				course: null,
			};
		default:
			return state;
	}
}

export default modalReducer;
