import React from "react";
import {useSelector, useDispatch} from "react-redux"
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import {
	CourseCardTagBase,
	CourseCardTag,
	CourseCardLabel,
	CourseCardTitleBase,
	CourseCardTitle,
} from "../dashboard/DraggableCourseCard";

import {closeModal} from "../../redux"

function CourseModal() {
	const dispatch = useDispatch()
	const {isOpen, course} = useSelector((state)=>{return state.modal})

	return (
		<Modal open={isOpen} onClick={()=>{dispatch(closeModal())}}>
			{course && (
				<StyledModalWrapper>
					<StyledModalBody>
						<CourseCardTitleBase>
							<CourseCardTitle>{course.name}</CourseCardTitle>
						</CourseCardTitleBase>
						<CourseCardTagBase>
							{course.tags &&
								course.tags.map((tag, id) => (
									<CourseCardTag key={id} color={tag.color}>
										{tag.name}
									</CourseCardTag>
								))}
						</CourseCardTagBase>
						<CourseCardTagBase>
							{course.labels &&
								course.labels.map((label, id) => (
									<CourseCardLabel
										key={id}
										color={label.color}
									>
										{label.name}
									</CourseCardLabel>
								))}
						</CourseCardTagBase>

						{course.prerequisites.length !== 0 && (
							<>
								<StyledSubtitle>Prerequisites</StyledSubtitle>
								<StyledCourseBase>
									{course.prerequisites.map((prereq, id) => (
										<CourseCardLabel
											key={id}
											color={"#e55204"}
										>
											{prereq}
										</CourseCardLabel>
									))}
								</StyledCourseBase>
							</>
						)}
						{course.corequisites.length !== 0 && (
							<>
								<StyledSubtitle>Corequisites</StyledSubtitle>
								<StyledCourseBase>
									{course.corequisites.map((coreq, id) => (
										<CourseCardLabel
											key={id}
											color={"#e55204"}
										>
											{coreq}
										</CourseCardLabel>
									))}
								</StyledCourseBase>
							</>
						)}

						<StyledSubtitle>Description</StyledSubtitle>
						<StyledParagraph>{course.description}</StyledParagraph>
					</StyledModalBody>
				</StyledModalWrapper>
			)}
		</Modal>
	);
}

const StyledModalWrapper = styled.div`
	position: absolute;
	width: 50vw;
	background-color: white;
	margin-top: 25vh;
	margin-left: 25vw;
	border: none;
	&:focus {
		outline: none;
	}

	@media (max-width: 767px) {
		width: 80vw;
		margin-left: 10vw;
	}
`;

const StyledModalBody = styled.div`
	padding: 60px 40px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	@media (max-width: 767px) {
		padding: 40px 20px;
	}
`;

const StyledSubtitle = styled.p`
	margin: 0px;
	font-weight: 500;
`;

const StyledParagraph = styled(StyledSubtitle)`
	font-weight: 300;
	background-color: #e4e4e4;
	padding: 5px;
	color: #303030;
`;

const StyledCourseBase = styled(CourseCardTagBase)`
	flex-direction: column;
	width: max-content;
`;

export default CourseModal;
