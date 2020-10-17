import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import {
	Container,
	ViewContainer,
	ViewHeader,
	ListViewTypography,
	ListViewHeaderAccent,
	ListViewCardContainer,
	CheckButton,
	AddButton,
	GraphButton,
} from "./DashboardComponents";
import { CardCourse } from "./CardCourseComponents";

function Dashboard() {
	const [degreePlan, setDegreePlan] = useState([]);
	const [courses, setCourses] = useState([]);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		fetch("http://localhost:5000/courses/COSC")
			.then(async (value) => {
				return value.json();
			})
			.then((data) => {
				data.sort(compareCourse);
				setCourses(data);
			});
	}, []);

	return (
		<>
			<NavBar />
			<Container>
				<ViewContainer isOpen={isOpen} overflow={false}>
					<ViewHeader>
						<ListViewTypography variant="h4">
							My Course Plan
						</ListViewTypography>
						<ListViewTypography>
							Total Credits:{`${10}`}
						</ListViewTypography>
					</ViewHeader>
					<ListViewHeaderAccent />
					<ListViewCardContainer>
						{degreePlan.map((data, i) => (
							<CardCourse
								id={i}
								accentColor={"green"}
								onClickFunction={() => {
									const slice = degreePlan.splice(i, 1);
									const newSlice = [].concat(courses, slice);
									newSlice.sort(compareCourse);
									setCourses(newSlice);
									setDegreePlan(degreePlan);
								}}
							>{`${data.id}`}</CardCourse>
						))}
					</ListViewCardContainer>
				</ViewContainer>
				<ViewContainer span="2" light isOpen={isOpen} overflow={false}>
					<ViewHeader dark>
						<ListViewTypography variant="h4">
							Offered Courses
						</ListViewTypography>
					</ViewHeader>
					<ListViewCardContainer>
						{courses.map((data, i) => (
							<CardCourse
								id={i}
								accentColor={"red"}
								onClickFunction={() => {
									const slice = courses.splice(i, 1);
									const newSlice = [].concat(
										degreePlan,
										slice
									);
									newSlice.sort(compareCourse);
									setCourses(courses);
									setDegreePlan(newSlice);
								}}
							>{`${data.id}`}</CardCourse>
						))}
					</ListViewCardContainer>
				</ViewContainer>
				{isOpen ? (
					<CheckButton onClick={() => setIsOpen(!isOpen)} />
				) : (
					<>
						<AddButton onClick={() => setIsOpen(!isOpen)} />
						<GraphButton />
					</>
				)}
			</Container>
		</>
	);
}

function compareCourse(a, b) {
	if (a.id < b.id) {
		return -1;
	}
	if (a.id > b.id) {
		return 1;
	}
	return 0;
}

export default Dashboard;
