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
	const [totalCredit, setTotalCredit] = useState(0);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/courses/COSC`)
			.then(async (value) => {
				return value.json();
			})
			.then((data) => {
				data.sort(compareCourse);
				setCourses(data);
			});

		setTotalCredit(degreePlan.reduce(totalCreditsReducer, 0));
	}, []);
	//

	return (
		<>
			<NavBar />
			<Container>
				<ViewContainer isOpen={isOpen}>
					<ViewHeader>
						<ListViewTypography variant="h4">
							My Course Plan
						</ListViewTypography>
						<ListViewTypography>
							Total Credits:{`${totalCredit}`}
						</ListViewTypography>
					</ViewHeader>
					<ListViewHeaderAccent />
					<ListViewCardContainer>
						{degreePlan.map((data, i) => (
							<CardCourse
								key={i}
								accentColor={"green"}
								onClickFunction={() => {
									const slice = degreePlan.splice(i, 1);
									const newSlice = [].concat(courses, slice);
									newSlice.sort(compareCourse);
									setCourses(newSlice);
									setDegreePlan(degreePlan);
									setTotalCredit(
										degreePlan.reduce(
											totalCreditsReducer,
											0
										)
									);
								}}
							>{`${data.id}`}</CardCourse>
						))}
					</ListViewCardContainer>
				</ViewContainer>
				<ViewContainer span="2" light isOpen={isOpen}>
					<ViewHeader dark>
						<ListViewTypography variant="h4">
							Offered Courses
						</ListViewTypography>
					</ViewHeader>
					<ListViewCardContainer>
						{courses.map((data, i) => (
							<CardCourse
								key={i}
								accentColor={"red"}
								addIcon
								onClickFunction={() => {
									const slice = courses.splice(i, 1);
									const newSlice = [].concat(
										degreePlan,
										slice
									);
									newSlice.sort(compareCourse);
									setCourses(courses);
									setDegreePlan(newSlice);
									setTotalCredit(
										newSlice.reduce(totalCreditsReducer, 0)
									);
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

function totalCreditsReducer(accumulator, current) {
	const credits = Math.floor(current.courseNumber / 100) % 10;

	return accumulator + credits;
}

export default Dashboard;
