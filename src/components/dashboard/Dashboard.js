import React from "react";
import { CardCourse } from "./CardCourseComponents";

function Dashboard() {
	return (
		<div>
			<CardCourse text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction={() => { console.log("Hello") }} bgColor="orange" />
			<CardCourse text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction={() => { console.log("Bye") }} bgColor="green" />
			<CardCourse text="COSC 4336: SOFTWARE DEVELOPMENT" onClickFunction={() => { console.log("Hello again") }} bgColor="gray" />
		</div>
	);
}

export default Dashboard;
