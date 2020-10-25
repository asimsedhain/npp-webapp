import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import NavBar from "./NavBar";
import { DroppableListContainer, Container } from "./DashboardComponents";
import DraggableCourseCard from "./DraggableCourseCard";
import DroppableCourseList from "./DroppableCourseList";
import data from "./data";
import { GraphButton, AddButton, CheckButton } from "./DashboardButtons";
import SidePanel from "./SidePanel";

const graphPageState = "graphPageState";
const sidePanelPageState = "sidePanelPageState";
const defaultPageState = "defaultPageState";

function Dashboard() {
	const [pageState, setPageState] = useState(defaultPageState);

	const [listState, setListStates] = useState({
		planning: data,
		enrolled: [],
		completed: [],
		server: [],
	});
	const [internalSearchKey, setInternalSearchKey] = useState("");

	const listNames = ["planning", "enrolled", "completed"];
	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/courses/COSC`)
			.then(async (value) => {
				return value.json();
			})
			.then((data) => {
				data.sort(compareCourse);

				//Will be removed in the futre
				data = data.map((course) => {
					let temp = { ...course };
					temp.tags = [];
					temp.labels = [];
					if (temp.courseNumber < 3000) {
						temp.tags.push({
							name: "Lower Level",
							color: "#494949",
						});
					} else {
						temp.tags.push({
							name: "Upper Level",
							color: "#E59804",
						});
					}
					temp.tags.push(		{ name: "Prerequisite: Unsatisfied", color: "#FF0000" },
					);
					temp.labels.push({name: "Spring 2021", color: "#46F446"});
					temp.name = `${temp.id}: ${temp.name}`;
					return temp;
				});
				console.log(data);
				setListStates({ ...listState, server: data });
			});
	}, []);
	//

	return (
		<>
			<NavBar value={internalSearchKey} setValue={setInternalSearchKey} />
			<GraphButton
				show={pageState === defaultPageState}
				onClick={() => setPageState(graphPageState)}
			/>
			<AddButton
				show={pageState === defaultPageState}
				onClick={() => setPageState(sidePanelPageState)}
			/>
			<CheckButton
				show={pageState !== defaultPageState}
				onClick={() => setPageState(defaultPageState)}
			/>
			{pageState === graphPageState ? (
				<></>
			) : (
				<DragDropContext
					onDragEnd={(result) =>
						onDragEnd(result, listState, setListStates)
					}
				>
					<Container split={pageState === sidePanelPageState}>
						<DroppableListContainer>
							{listNames.map((listName) => (
								<DroppableCourseList
									key={listName}
									id={listName}
									credits={getTotalCredits(
										listState[listName],
										internalSearchKey
									)}
								>
									{listState[listName]
										.filter((course) =>
											course.name
												.toLowerCase()
												.includes(internalSearchKey)
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
						{pageState === sidePanelPageState && (
							<SidePanel>
								<DroppableCourseList
									id={"server"}
									hideHeader
									noBackGround
								>
									{listState["server"].map((course, id) => (
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

function getTotalCredits(list, filterKey) {
	return list
		.filter((course) => course.name.toLowerCase().includes(filterKey))
		.reduce(totalCreditsReducer, 0);
}

function onDragEnd(result, listState, setListStates) {
	const { source, destination } = result;
	if (!destination) {
		return;
	}
	if (source.droppableId === destination.droppableId) {
		const newArray = Array.from(listState[source.droppableId]);
		const [removed] = newArray.splice(source.index, 1);
		newArray.splice(destination.index, 0, removed);
		setListStates({ ...listState, [source.droppableId]: newArray });
		return;
	}

	const newSourceArray = Array.from(listState[source.droppableId]);
	const newDestinationArray = Array.from(listState[destination.droppableId]);
	const [removed] = newSourceArray.splice(source.index, 1);
	newDestinationArray.splice(destination.index, 0, removed);

	setListStates({
		...listState,
		[source.droppableId]: newSourceArray,
		[destination.droppableId]: newDestinationArray,
	});
}

export default Dashboard;
