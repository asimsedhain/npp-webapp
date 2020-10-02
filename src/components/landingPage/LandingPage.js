import React from "react";
import tower from "../assets/tower.jpg";
import logo from "../assets/logo_full_white.png";
import styled from "styled-components";

const msClient = {
	tenantId: '8f671598-d6fe-4bb6-aa89-03fc7126dba1',
	id: '02d1c5dc-917d-495a-bfe5-fee48aa54867',
	redirectURI: 'http://localhost:3001/login'
}
const loginURL = `https://login.microsoftonline.com/${msClient.tenantId}/oauth2/v2.0/authorize?client_id=${msClient.id}&response_type=code&redirect_uri=${encodeURI(msClient.redirectURI)}&response_mode=query&scope=openid`;

function LandingPage() {
	function redirect() {
		// TODO: use refresh token if access token is expired?
		window.location.href = loginURL;
	}
	return (
		<>
			<LandingPageImage src={tower} />
			<LogoImage src={logo} />
			<LogoText>Degree Visualizer</LogoText>
			<LoginButton onClick={redirect}>Login</LoginButton>
		</>
		
	);
}

const LandingPageImage = styled.img`
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;;
	width: 100%;
	z-index: -1;
	filter: brightness(80%) contrast(110%);
	object-fit: cover;
`;

const LogoImage = styled.img`
	display: block;
	margin: 0 auto;
	z-index: 1;
	padding-top: 200px;
	//box-shadow: 5px 10px black;
	filter: drop-shadow(3px 3px 10px black);
	@media only screen and (max-width: 600px) {
		width: 340px; 
   		height: 140px;
	  }
`;

const LogoText = styled.h1`
	font-size: 3rem;
	display: block;
	margin: 0 auto;
	text-align: center;
	color: white;
	text-shadow: 3px 3px 10px black;
	@media only screen and (max-width: 400px) {
		font-size: 2.3rem;
	  }
`;

const LoginButton = styled.button`
	background-color: #092d74;
	color: white;
	font-weight: bold;
	display: block;
	font-size: 2rem;
	padding: 10px 50px;
	margin: 50px auto;
`;


export default LandingPage;
