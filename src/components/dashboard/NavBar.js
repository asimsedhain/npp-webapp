import React from "react"
import styled from "styled-components"
import logo from "../assets/logo_full_white.png"

function NavBar(){
    return (
        <>
            <Navbar></Navbar>
            <LogoImage src = {logo} />
            <LogoutButton>Logout</LogoutButton>
        </>
    )
}

const Navbar = styled.header`
    background: #092d74;
    height: 80px;
    width: 100vw!important;
    display: inline-block;
    padding-bottom: 15px;
`;

const LogoImage = styled.img`
    position: absolute;
    width: 187px;
    height: 73px;
    left: 14px;
    top: 0px;
    padding-top: 5px;
    padding-bottom: 10px;
    filter: drop-shadow(3px 3px 10px black);
`;

const LogoutButton = styled.button`
    position: absolute;
    right:26px;
    top: 23px;
    background: #E55204;
    width: 117px;
    height: 48px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 21px;
    text-align: center;
`;

export default NavBar