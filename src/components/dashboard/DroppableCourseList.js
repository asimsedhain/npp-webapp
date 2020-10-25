import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const CourseList = styled.div`
	//display: flex;
	//flex-direction: column;
	//gap: 15px;
	//height: max-content;
	//overflow-y: auto;
	min-height: 50px;
	//TODO fix this
	//max-height: calc(100%);
`;

const CourseListBase = styled.div`
	height: max-content;
	background-color: ${(props) => !props.noBackGround && "#E7E7E7"};
	padding: 15px 10px;
`;

const ListTitleBase = styled.div`
	display: flex;
	flex-direction: row;
	font-family: roboto, sans-serif;
	font-size: 1.17rem;
	text-transform: capitalize;
	margin-bottom: 7px;
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

const DroppableCourseList = ({
	id,
	children,
	hideHeader,
	noBackGround,
	credits,
}) => {
	return (
		<CourseListBase noBackGround={noBackGround}>
			{!hideHeader && (
				<ListTitleBase>
					<ListTitleMain>{id}</ListTitleMain>
					<ListTitleSecondary>credits: {credits}</ListTitleSecondary>
					<ListTitleSideButton>...</ListTitleSideButton>
				</ListTitleBase>
			)}
			<Droppable droppableId={id}>
				{(provided, snapshot) => (
					<CourseList
						ref={provided.innerRef}
						isDraggingOver={snapshot.isDraggingOver}
					>
						{children}
						{provided.placeholder}
					</CourseList>
				)}
			</Droppable>
		</CourseListBase>
	);
};
export default DroppableCourseList;
