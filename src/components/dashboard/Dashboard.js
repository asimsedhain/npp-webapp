import React from "react";
import { Button, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import { CardBorder, StyledCard } from "./StyledDashboardComponents";

function Dashboard() {
	return (
		<div>
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction={() => { console.log("Hello") }} bgColor="orange"/>
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction={() => { console.log("Bye") }} bgColor="green"/>
			<DraggableCard text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction={() => { console.log("Hello again") }} bgColor="gray"/>
		</div>
	);
}

const DraggableCard = ({ text, onClickFunction, bgColor }) => {
	return (
		<StyledCard>
			<CardBorder bgColor={bgColor}>
				<Typography variant="subtitle"> {text}
					<Button onClick={() => onClickFunction()}>
						<RemoveIcon> </RemoveIcon></Button>
				</Typography>
			</CardBorder>
		</StyledCard>
	);
};

export default Dashboard;
