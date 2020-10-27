import React from "react";
import styled from "styled-components";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function SidePanel({ children }) {
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
			{children}
		</SidePanelContainer>
	);
}

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
