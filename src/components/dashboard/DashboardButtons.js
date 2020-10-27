import React from "react";
import styled from "styled-components";
import graphIcon from "../assets/graphicon.svg";
import plusIcon from "../assets/plusIcon.svg";
import checkIcon from "../assets/checkIcon.svg";
const GraphButton = (props) => {
	return (
		<ButtonWrapper {...props}>
			<img src={graphIcon} alt="graph button" />
		</ButtonWrapper>
	);
};

const AddButton = (props) => {
	return (
		<ButtonWrapper {...props}>
			<img src={plusIcon} alt="add courses button" />
		</ButtonWrapper>
	);
};

const CheckButton = (props) => {
	return (
		<ButtonWrapper {...props}>
			<img src={checkIcon} alt="check button" />
		</ButtonWrapper>
	);
};

const ButtonWrapper = styled.div`
	display: ${(props) => (props.show ? "inline" : "none")};
	position: absolute;
	right: 5%;
	bottom: ${(props)=> props.upper?  "calc(5% + 5rem)":"5%"};
	& img {
		height: 5rem;
	}
`;

export { GraphButton, AddButton, CheckButton };
