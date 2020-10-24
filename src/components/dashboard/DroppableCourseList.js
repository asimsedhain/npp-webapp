import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const CourseList = styled.div`
	background-color: ${(props) =>
		props.isDraggingOver ? "#E55204" : "#E7E7E7"};
	padding: 15px 10px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	height: 100%;
	
`;

const ListTitleBase = styled.div`
	display: flex;
	flex-direction: row;
	font-family: roboto, sans-serif;
	//font-size: 1.17rem;
	text-transform: capitalize;
`;

const ListTitleMain = styled.div`
	font-weight: bold;
`;

const ListTitleSecondary = styled.div`
	margin-left: auto;
`;

const ListTitleSideButton = styled.div`
	margin-left: 10px;
`;

const DroppableCourseList = ({ id, children }) => {
	return (
		<Droppable droppableId={id}>
			{(provided, snapshot) => (
				<CourseList
					ref={provided.innerRef}
					isDraggingOver={snapshot.isDraggingOver}
				>
					<ListTitleBase>
						<ListTitleMain>{id}</ListTitleMain>
						<ListTitleSecondary>credits: 30</ListTitleSecondary>
						<ListTitleSideButton>...</ListTitleSideButton>
					</ListTitleBase>
					{children}
					{provided.placeholder}
				</CourseList>
			)}
		</Droppable>
	);
};
export default DroppableCourseList;
