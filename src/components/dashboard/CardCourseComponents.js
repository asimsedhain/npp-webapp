import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutline";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import { CardBorder, StyledCard } from "./StyledDashboardComponents";

const CardCourse = ({ children, onClickFunction, accentColor, addIcon }) => {
	return (
		<StyledCard>
			<CardBorder bgColor={accentColor}>
				<Typography>
					{" "}
					{children}
					<Button onClick={() => onClickFunction()}>
						{addIcon ? <AddIcon /> : <RemoveIcon />}
					</Button>
				</Typography>
			</CardBorder>
		</StyledCard>
	);
};

function CourseCard({ title, tags, labels }) {
	return (
		<CourseCardContainer>
			<CourseCardTagBase>
				{tags.map((tag, id) => (
					<CourseCardTag key={id} color={tag.color}>
						{tag.name}
					</CourseCardTag>
				))}
			</CourseCardTagBase>

			<CourseCardTitleBase>
				<CourseCardTitle>{title}</CourseCardTitle>
			</CourseCardTitleBase>
			<CourseCardTagBase>
				{labels.map((label, id) => (
					<CourseCardLabel key={id} color={label.color}>
						{label.name}
					</CourseCardLabel>
				))}
			</CourseCardTagBase>
		</CourseCardContainer>
	);
}

const CourseCardContainer = styled.div`
	border-style: solid;
	border-color: #aaa;
	border-width: 1px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	padding: 8px 20px;
	background-color: ${props=> props.gray ? "#C9C9C9":"white"};
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
	background-color: ${(props) => props.color ? props.color : "green"};
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

export { CardCourse, CourseCard };
