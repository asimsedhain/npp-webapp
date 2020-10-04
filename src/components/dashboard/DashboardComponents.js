import { Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import styled from "styled-components";
const Container = styled.div`
	background: #c4c4c4;
	width: 95vw;
	margin: 0 auto;
	margin-top: 10px;
	height: calc(100vh - 150px);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
const ViewContainer = styled.div`
	width: 100%;
	height: 100%;
	grid-column: ${(props) => `span ${props.span}`};
	grid-column: ${(props) => !props.isOpen && `span 3`};

	background: ${(props) => props.light && "#E1E1E1"};
	display: ${(props) => !props.isOpen && props.span && "none"};
`;

const ViewHeader = styled.div`
	width: 100%;
	height: 65px;
	background: #092d74;
	background: ${(props) => props.dark && "#353842"};
`;

const ListViewHeaderAccent = styled.div`
	height: 6px;
	background: #e55204;
`;

const ListViewTypography = styled(Typography)`
	color: white;
`;

const ListViewCardContainer = styled.div`
	height: 100%;
`;

const AddButton = styled(AddCircleIcon)`
	filter: drop-shadow(-3px 3px 1px black);
	color: white;
	width: 50px;
	font-size: 5rem !important;
	margin: 0px;
	position: absolute;
	right: 40px;
	bottom: 50px;
`;

const CheckButton = styled(CheckCircleIcon)`
	color: white;
	filter: drop-shadow(-3px 3px 1px black);
	width: 50px;
	font-size: 5rem !important;
	margin: 0px;
	position: absolute;
	right: 40px;
	bottom: 50px;
`;

const GraphButton = styled(DonutLargeIcon)`
	filter: drop-shadow(-3px 3px 1px black);
	color: white;
	width: 50px;
	font-size: 5rem !important;
	margin: 0px;
	position: absolute;
	right: 40px;
	bottom: 150px;
`;

export {
	ListViewCardContainer,
	ListViewTypography,
	ListViewHeaderAccent,
	GraphButton,
	CheckButton,
	AddButton,
	ViewHeader, 
	ViewContainer,
	Container	
};
