import React from "react";
import styled from "styled-components";
import logo from "../assets/logo_full_white.png";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function NavBar({value, setValue}) {
	return (
		<>
			<NavbarContainer> 
				<LogoImage src={logo} />
				<NavBarSearchField value={value} onChange={(e)=>{
					setValue(e.target.value.toLowerCase())
				}}
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
	height: 50px;
`;

const LogoImage = styled.img`
	width: 100px;
	height: 40px;
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
	background-color: #e55204;
	height: 5px;
`;

export default NavBar;

