import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import NavBar from "./NavBar";
import {
	DroppableListContainer,
	Container,
	PaddingContainer,
} from "./DashboardComponents";
import DraggableCourseCard from "./DraggableCourseCard";
import DroppableCourseList from "./DroppableCourseList";
import { GraphButton, AddButton, CheckButton } from "./DashboardButtons";
import SidePanel from "./SidePanel";
import CourseModal from "../modal/CourseModal";

import {
	GRAPH_VIEW,
	PANEL_VIEW,
	DEFAULT_VIEW,
	openGraphView,
	openPanelView,
	openDefaultView,
	moveCourse,
	fetchCourse,
} from "../../redux";

function Dashboard() {
	const dispatch = useDispatch();
	const pageState = useSelector((state) => {
		return state.dashboard.view;
	});
	const searchKey = useSelector((state) => {
		return state.dashboard.searchKey;
	});
	const courses = useSelector((state) => {
		return state.courses;
	});

	const listNames = ["planning", "enrolled", "completed"];

	return (
		<>
			{/*
				NavBar
				*/}
			<NavBar />

			{/*
				Buttons
				*/}
			<GraphButton
				upper
				show={pageState === DEFAULT_VIEW}
				onClick={() => dispatch(openGraphView())}
			/>
			<AddButton
				show={pageState === DEFAULT_VIEW}
				onClick={() => {
					dispatch(openPanelView());
					courses.server.length === 0 && dispatch(fetchCourse());
				}}
			/>
			<CheckButton
				show={pageState !== DEFAULT_VIEW}
				onClick={() => dispatch(openDefaultView())}
			/>
			{/*
				Buttons End
				*/}

			{/*
			Course modal
											*/}
			<CourseModal />

			{/*
			Draggable lists
			*/}
			{pageState === GRAPH_VIEW ? (
				<></>
			) : (
				<DragDropContext
					onDragEnd={(result) =>
						dispatch(moveCourse(result.source, result.destination))
					}
				>
					<Container split={pageState === PANEL_VIEW}>
						<PaddingContainer split={pageState === PANEL_VIEW}>
							<DroppableListContainer>
								{listNames.map((listName) => (
									<DroppableCourseList
										key={listName}
										id={listName}
										credits={getTotalCredits(
											courses[listName],
											searchKey
										)}
									>
										{courses[listName]
											.filter(
												(course) =>
													course.name
														.toLowerCase()
														.includes(searchKey) ||
													course.id
														.toLowerCase()
														.includes(searchKey)
											)
											.map((course, id) => (
												<DraggableCourseCard
													course={course}
													key={course.id}
													index={id}
												/>
											))}
									</DroppableCourseList>
								))}
							</DroppableListContainer>
						</PaddingContainer>
						{pageState === PANEL_VIEW && (
							<SidePanel>
								<DroppableCourseList
									id={"server"}
									hideHeader
									noBackGround
								>
									{courses["server"].map((course, id) => (
										<DraggableCourseCard
											course={course}
											key={course.id}
											index={id}
										/>
									))}
								</DroppableCourseList>
							</SidePanel>
						)}
					</Container>
				</DragDropContext>
			)}
		</>
	);
}

//function compareCourse(a, b) {
	//if (a.id < b.id) {
		//return -1;
	//}
	//if (a.id > b.id) {
		//return 1;
	//}
	//return 0;
//}

function totalCreditsReducer(accumulator, current) {
	const credits = Math.floor(current.courseNumber / 100) % 10;
	return accumulator + credits;
}

function getTotalCredits(list, filterKey) {
	return list
		.filter(
			(course) =>
				course.name.toLowerCase().includes(filterKey) ||
				course.id.toLowerCase().includes(filterKey)
		)
		.reduce(totalCreditsReducer, 0);
}

export default Dashboard;
