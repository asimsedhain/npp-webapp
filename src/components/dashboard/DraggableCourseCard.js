import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";



const CourseCardContainer = styled.div`
	border-style: solid;
	border-color: #aaa;
	border-width: 1px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	padding: 8px 20px;
	background-color: ${(props) => (props.gray ? "#C9C9C9" : "white")};
`;

const CourseCardTitle = styled.h3`
	font-family: Roboto, sans-serif;
	font-weight: bold;
	text-transform: uppercase;
	margin: 6px 0px;
`;

const CourseCardTitleBase = styled.div`
	width: 100%;
	text-overflow: ellipsis;
`;

const CourseCardTag = styled.div`
	font-family: Roboto, sans-serif;
	padding: 2px;
	background-color: ${(props) => (props.color ? props.color : "green")};
	font-size: 0.8rem;
	color: white;
	padding: 2px 4px;
	margin-right: 8px;
`;
const CourseCardTagBase = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

const CourseCardLabel = styled(CourseCardTag)`
	font-size: 1rem;
	padding: 6px 4px;
`;

function CourseCard({ course, provided }) {
	return (
		<CourseCardContainer
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
			<CourseCardTagBase>
				{course.tags.map((tag, id) => (
					<CourseCardTag key={id} color={tag.color}>
						{tag.name}
					</CourseCardTag>
				))}
			</CourseCardTagBase>

			<CourseCardTitleBase>
				<CourseCardTitle>{course.title}</CourseCardTitle>
			</CourseCardTitleBase>
			<CourseCardTagBase>
				{course.labels.map((label, id) => (
					<CourseCardLabel key={id} color={label.color}>
						{label.name}
					</CourseCardLabel>
				))}
			</CourseCardTagBase>
		</CourseCardContainer>
	);
}

const DraggableCourseCard = ({ course, index }) => {
	return (
		<Draggable draggableId={course.id} index={index}>
			{(provided, snapshot) => (
				<CourseCard provided={provided} course={course} />
			)}
		</Draggable>
	);
};

export default DraggableCourseCard;
