import React from "react";
import tower from "../assets/tower.jpg";
import logo from "../assets/logo_full_white.png";
import styled from "styled-components";
//123
function LandingPage() {
	return (
		<>
			<LandingPageImage src={tower} />
			<LogoImage src={logo} />
			<LogoText>Degree Visualizer</LogoText>
			<LoginButton>Login</LoginButton>
		</>
	);
}

const LandingPageImage = styled.img`
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
	filter: brightness(80%) contrast(110%);
`;

const LogoImage = styled.img`
	display: block;
	margin: 0 auto;
	z-index: 1;
	padding-top: 200px;
	//box-shadow: 5px 10px black;
	filter: drop-shadow(3px 3px 10px black);
`;

const LogoText = styled.h1`
	font-size: 3rem;
	display: block;
	margin: 0 auto;
	text-align: center;
	color: white;
	text-shadow: 3px 3px 10px black;
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
