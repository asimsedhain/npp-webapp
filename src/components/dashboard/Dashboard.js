import React from "react";
//import Container from "@material-ui/core/Container";
import styled from "styled-components";
import NavBar from "./NavBar";

function Dashboard() {
  return (

    <NavBar>

      <Header>
        <ContainerHeader>My Courses Plan</ContainerHeader>
        <ContainerTail>Total Credit Hours:</ContainerTail>
      </Header>
      <div
        style={{
          backgroundColor: '#C4C4C4',
          width: '1232px',
          height: '900px'
        }}
      />
    </NavBar>
  );
}


const ContainerHeader = styled.h1`
text-align: start;
margin: 0.8rem ;
`;

const ContainerTail = styled.p`
text-align: right;
margin: 1rem ;
`;

const Header = styled.div`
padding: 1px ; 
background: #092d74;
color: white;
font-size: 15px;
`;

export default Dashboard;
