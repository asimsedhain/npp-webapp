import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import NavBar from "./NavBar";
import { Container } from "./DashboardComponents";
import DraggableCourseCard from "./DraggableCourseCard";
import DroppableCourseList from "./DroppableCourseList";
import data from "./data";

function Dashboard() {
	const [degreePlan, setDegreePlan] = useState([]);
	const [courses, setCourses] = useState([]);
	const [totalCredit, setTotalCredit] = useState(0);

	const [isOpen, setIsOpen] = useState(false);

	const [listState, setListStates] = useState({
		planning: data,
		enrolled: [],
		completed: [],
	});
	const listNames = ["planning", "enrolled", "completed"];
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

	const onDragEnd = (result) => {
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
		const newDestinationArray = Array.from(
			listState[destination.droppableId]
		);
		const [removed] = newSourceArray.splice(source.index, 1);
		newDestinationArray.splice(destination.index, 0, removed);

		setListStates({
			...listState,
			[source.droppableId]: newSourceArray,
			[destination.droppableId]: newDestinationArray,
		});
	};
	return (
		<>
			<NavBar />
			<DragDropContext onDragEnd={onDragEnd}>
				<Container>
					{listNames.map((listName) => (
						<DroppableCourseList id={listName}>
							{listState[listName].map((course, id) => (
								<DraggableCourseCard
									course={course}
									key={course.id}
									index={id}
								/>
							))}
						</DroppableCourseList>
					))}
				</Container>
			</DragDropContext>
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
