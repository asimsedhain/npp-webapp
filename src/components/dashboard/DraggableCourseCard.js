import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

function CourseCard({ course, provided }) {
	const dispatch = useDispatch();
	return (
		<CourseCardContainer
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			onClick={() => {
				dispatch(openModal(course));
			}}
		>
			<CourseCardTagBase>
				{course.tags &&
					course.tags.map((tag, id) => (
						<CourseCardTag key={id} color={tag.color}>
							{tag.name}
						</CourseCardTag>
					))}
			</CourseCardTagBase>

			<CourseCardTitleBase>
				<CourseCardTitle>{course.name}</CourseCardTitle>
			</CourseCardTitleBase>
			<CourseCardTagBase>
				{course.labels &&
					course.labels.map((label, id) => (
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
			{(provided) => <CourseCard provided={provided} course={course} />}
		</Draggable>
	);
};

const CourseCardContainer = styled.div`
	border-style: solid;
	border-color: #aaa;
	border-width: 1px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	padding: 8px 20px;
	background-color: ${(props) => (props.gray ? "#C9C9C9" : "white")};
	margin-top: 15px;
	gap: 6px;
`;

const CourseCardTitle = styled.h3`
	font-family: Roboto, sans-serif;
	font-weight: bold;
	text-transform: uppercase;
	margin: 0px 0px;
	color: #303030;
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
`;
const CourseCardTagBase = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 4px 8px;
`;

const CourseCardLabel = styled(CourseCardTag)`
	font-size: 1rem;
	padding: 6px 4px;
`;

export default DraggableCourseCard;
export {
	CourseCardTagBase,
	CourseCardTag,
	CourseCardLabel,
	CourseCardTitleBase,
	CourseCardTitle,
};
