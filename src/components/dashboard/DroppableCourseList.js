import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const CourseList = styled.div`
	overflow-y: auto;
	height: calc(100% - 35px);
	height: ${props=> props.noBackGround && "calc(100vh - 185px)"};
	min-height: 50px;
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	::-webkit-scrollbar-track {
		background-color: #ccc;
	}
	::-webkit-scrollbar-thumb {
		background-color: #aaa;
		border-radius: 4px;
	}
`;

const CourseListBase = styled.div`
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
						noBackGround={noBackGround}
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
