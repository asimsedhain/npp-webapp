import React from "react";
import { Card, Button, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";


function Dashboard() {
	return (
		<div >
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction = {()=>{console.log("Hello")}} status={"Enrolled"}/>
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction = {()=>{console.log("Bye")}} status={"Completed"}/>
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction = {()=>{console.log("Hello again")}} status={"Planned"}/>
		</div>
	);
}
const DraggableCard = ({ text, onClickFunction}) => {
	return (

		<Card
			style={{ width: "22rem", backgroundColor: "#FEFAFA", color: "blue", height: "35px", margin: 10 }}
		>
			<Typography variant="subtitle">{"B"}{text}
				<Button onClick={()=>onClickFunction()}>
  <RemoveIcon></RemoveIcon></Button>
			</Typography>
		</Card>


	);
};

export default Dashboard;
