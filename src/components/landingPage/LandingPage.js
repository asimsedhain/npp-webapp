import React from "react";
import tower from "../assets/tower_low_quality.jpg";
import logo from "../assets/logo_full_white.png";
import {LandingPageImage, LogoImage, LogoText, LoginButton} from "./LandingPageComponents"


const msClient = {
	tenantId: '8f671598-d6fe-4bb6-aa89-03fc7126dba1',
	id: '02d1c5dc-917d-495a-bfe5-fee48aa54867',
	redirectURI: 'https://uttyler-deg-vis.herokuapp.com/login'
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


export default LandingPage;
