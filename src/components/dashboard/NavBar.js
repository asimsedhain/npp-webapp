import React from "react";
import styled from "styled-components";
import logo from "../assets/logo_full_white.png";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function NavBar() {
	return (
		<>
			<NavbarContainer>
				<LogoImage src={logo} />
				<NavBarSearchField
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<NavbarSearchIcon />
							</InputAdornment>
						),
					}}
				/>
				<LogoutButton>Logout</LogoutButton>
			</NavbarContainer>
			<NavbarAccent />
		</>
	);
}

const NavbarContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: #092d74;
	height: 70px;
	width: 100vw !important;
`;

const LogoImage = styled.img`
	width: 160px;
	height: 60px;
`;

const LogoutButton = styled(Button)`
	background-color: #e55204;
	margin-top: auto;
	margin-bottom: auto;
	text-transform: none;
	margin-left: auto;
	margin-right: 10px;
	color: white;
	border-radius: 0px;
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
`;

const NavBarSearchField = styled(TextField)`
	background: white;
	margin: auto 0;
	margin-left: 10px;
	width: 30%;
`;

const NavbarSearchIcon = styled(SearchIcon)`
	fill: grey;
`;

const NavbarAccent = styled.div`
	width: 100vw;
	background-color: #e55204;
	height: 5px;
`;

export default NavBar;

