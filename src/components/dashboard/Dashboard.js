import React from "react";
import { Card, Button, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";


function Dashboard() {
	return (
		<div classname="Dashboard">
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" />
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" />
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" />
		</div>
	);
}
const DraggableCard = ({ text }) => {
	return (

		<Card
			style={{ width: "22rem", backgroundColor: "#FEFAFA", color: "blue", height: "35px", margin: 10 }}
		>
			<Typography variant="subtitle">{text}
				<Button onClick={()=>console.log("delete")}>
  <RemoveIcon></RemoveIcon></Button>
			</Typography>
		</Card>


	);
};

export default Dashboard;