import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

function CourseCard({ course, provided }) {
	const { completedSet } = useSelector((state) => {
		return state.courses;
	});
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
				{course.courseNumber >= 3000 ? (
					<CourseCardTag color="#E59804">Upper Level</CourseCardTag>
				) : (
					<CourseCardTag color="#494949">Lower Level</CourseCardTag>
				)}
				{course.prerequisites.reduce((accu, courseId) => {
					return accu && completedSet.has(courseId);
				}, true) ? (
					<CourseCardTag color="#00FF00">
						Prerequisite: Satisfied
					</CourseCardTag>
				) : (
					<CourseCardTag color="#FF0000">
						Prerequisite: Unsatisfied
					</CourseCardTag>
				)}
			</CourseCardTagBase>

			<CourseCardTitleBase>
				<CourseCardTitle>{`${course.id}: ${course.name}`}</CourseCardTitle>
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
