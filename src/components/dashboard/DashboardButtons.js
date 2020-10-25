import React from "react";
import styled from "styled-components";
import graphIcon from "../assets/graphicon.svg";
import plusIcon from "../assets/plusIcon.svg";
import checkIcon from "../assets/checkIcon.svg";
const GraphButton = (props) => {
	return (
		<GraphButtonWrapper {...props}>
			<img src={graphIcon}  alt="graph button"/>
		</GraphButtonWrapper>
	);
};

const AddButton = (props) => {
	return (
		<AddButtonWrapper {...props}>
		<img src={plusIcon} alt="add courses button"/>
	</AddButtonWrapper>
	);
};

const CheckButton = (props) => {
	return (
		<CheckButtonWrapper {...props}>
		<img src={checkIcon} alt="check button"/>
	</CheckButtonWrapper>
	);
};

const GraphButtonWrapper = styled.div`
	display: ${(props) => (props.show ? "inline" : "none")};
	position: absolute;
	right: 40px;
	bottom: 150px;
`;
const AddButtonWrapper = styled.div`
	display: ${(props) => (props.show ? "inline" : "none")};
	position: absolute;
	right: 40px;
	bottom: 50px;
`;
const CheckButtonWrapper = styled.div`
	display: ${(props) => (props.show ? "inline" : "none")};
	position: absolute;
	right: 40px;
	bottom: 50px;
`;

export { GraphButton, AddButton, CheckButton };
