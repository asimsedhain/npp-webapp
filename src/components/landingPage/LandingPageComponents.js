import styled from "styled-components";
import Button from "@material-ui/core/Button";

const LandingPageImage = styled.img`
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
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

const LoginButton = styled(Button)`
	background-color: #092d74ee;
	border-radius: 0px;
	color: white;
	font-weight: bold;
	display: block;
	font-size: 2rem;
	padding: 10px 50px;
	margin: 50px auto;
	&:hover {
		background-color: #092d74;
	}
`;

export { LandingPageImage, LoginButton, LogoText, LogoImage };
