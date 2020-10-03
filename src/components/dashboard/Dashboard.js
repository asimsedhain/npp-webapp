import React, { useState } from "react";
//import Container from "@material-ui/core/Container";
import styled from "styled-components";
import NavBar from "./NavBar";
import { Typography, Card, CardContent } from "@material-ui/core";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Dashboard() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<NavBar />
			<Container>
				<ViewContainer isOpen>
					<ViewHeader>
						<ListViewTypography variant="h4">
							My Course Plan
						</ListViewTypography>
						<ListViewTypography>
							Total Credits:{`${10}`}
						</ListViewTypography>
					</ViewHeader>
					<ListViewHeaderAccent />
					<ListViewCardContainer></ListViewCardContainer>
				</ViewContainer>
				<ViewContainer span="2" light isOpen={isOpen}>
					<ViewHeader dark>
						<ListViewTypography variant="h4">
							Offered Courses
						</ListViewTypography>
					</ViewHeader>
					<ListViewCardContainer></ListViewCardContainer>
				</ViewContainer>
				{isOpen ? (
					<CheckButton onClick={()=>setIsOpen(!isOpen)}/>
				) : (
					<>
						<AddButton onClick={()=>setIsOpen(!isOpen)} />
						<GraphButton />
					</>
				)}
			</Container>
		</>
	);
}

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
	grid-column: ${(props) => props.isOpen && `span 3`};
	background: ${(props) => props.light && "#E1E1E1"};
	display: ${(props) => !props.isOpen && "none"};
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
	width: 50px;
	font-size: 5rem !important;
	margin: 0px;
	position: absolute;
	right: 40px;
	bottom: 50px;
`;

const GraphButton = styled(DonutLargeIcon)`
	color: white;
	width: 50px;
	font-size: 5rem !important;
	margin: 0px;
	position: absolute;
	right: 40px;
	bottom: 150px;
`;
export default Dashboard;
