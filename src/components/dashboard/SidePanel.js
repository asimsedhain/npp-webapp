import React from "react";
import { useSelector} from "react-redux";
import styled from "styled-components";
import { TextField, InputAdornment, CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ErrorIcon from "@material-ui/icons/Error";

function SidePanel({ children }) {
	const { loading, error } = useSelector((state) => {
		return state.courses;
	});
	return (
		<SidePanelContainer>
			<SidePanelHeader>Courses Offered</SidePanelHeader>
			<NavBarSearchField
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<NavbarSearchIcon />
						</InputAdornment>
					),
				}}
			/>
			{loading || error ? (
				<InfoContainer>
					{error ? (
						<>
							<ErrorIcon />
							<h2>{error}</h2>
						</>
					) : (
						<CircularProgress />
					)}
				</InfoContainer>
			) : (
				children
			)}
		</SidePanelContainer>
	);
}

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	& div {
		margin-bottom: calc(100vh - 55px - 100%);
		width: 70px !important;
		height: 70px !important;
		color: #092d74;
	}
	& h2 {
		margin-bottom: calc(100vh - 55px - 100%);
		color: white;
	}
	& svg {
		color: white;
		width: 70px !important;
		height: 70px !important;
	}
`;

const SidePanelHeader = styled.div`
	font-weight: bold;
	font-family: Roboto, sans-serif;
	font-size: 1.5rem;
	background-color: #353842;
	color: white;
	padding: 10px 35px;
`;

const SidePanelContainer = styled.div`
	background-color: #e55204;
	height: calc(100vh - 55px);
	overflow-y: hidden;
`;

const NavBarSearchField = styled(TextField)`
	background: white;
	margin: auto 0;
	margin: 10px;
	width: calc(100% - 20px);
`;

const NavbarSearchIcon = styled(SearchIcon)`
	fill: grey;
`;

export default SidePanel;
