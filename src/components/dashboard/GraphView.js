import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Graph } from "react-d3-graph";
import { CourseCard } from "./DraggableCourseCard";

function GraphView() {
	const { planning, enrolled, completed } = useSelector((state) => {
		return state.courses;
	});
	const courses = [].concat(planning, enrolled, completed, [
		{ id: "emptyAnchor", prerequisites: [] },
	]);
	if (courses.length === 0) {
		return <EmptyScreen />;
	}
	const connectedSet = new Set();
	const allCourses = new Set(
		courses.map((course) => {
			return course.id;
		})
	);
	const courseLinks = [];
	for (let i = 0; i < courses.length; i++) {
		for (let j = 0; j < courses[i].prerequisites.length; j++) {
			if (
				allCourses.has(courses[i].id) &&
				allCourses.has(courses[i].prerequisites[j])
			) {
				courseLinks.push({
					target: courses[i].id,
					source: courses[i].prerequisites[j],
				});
				connectedSet.add(courses[i].id);
				connectedSet.add(courses[i].prerequisites[j]);
			}
		}
	}
	for (const course of courses) {
		if (!connectedSet.has(course.id) && course.id !== "emptyAnchor") {
			courseLinks.push({
				source: "emptyAnchor",
				target: course.id,
				strokeWidth: 0,
				opacity: 0,
			});
		}
	}
	//console.log(courseLinks);
	//console.log("connectedSet", connectedSet);

	const data = { nodes: courses, links: courseLinks };
	return (
		<StyledDiv>
			<Graph
				id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
				data={data}
				config={graphConfig}
			/>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	height: calc(100vh - 75px);
	& #graph-id-graph-wrapper {
		height: 100%;
		width: 100%;
	}
	& #graph-id-graph-wrapper [name="svg-container-graph-id"] {
		height: 100% !important;
		width: 100% !important;
	}
`;

const graphConfig = {
	automaticRearrangeAfterDropNode: false,
	collapsible: true,
	directed: true,
	nodeHighlightBehavior: false,
	linkHighlightBehavior: false,
	maxZoom: 20,
	minZoom: 0.05,
	initialZoom: 0.7,
	panAndZoom: false,
	staticGraph: false,
	staticGraphWithDragAndDrop: false,
	height: "1000",
	width: "1000",
	d3: {
		alphaTarget: 1,
		linkLength: 2000,
		disableLinkForce: false,
		linkStrength: 0.005,
		gravity: -1000,
	},
	node: {
		opacity: 1,
		renderLabel: false,
		size: { width: 5000, height: 2000 },

		viewGenerator: (course) => <GraphViewGenerator course={course} />,
	},
	link: {
		fontSize: 8,
		fontWeight: "normal",
		highlightColor: "red",
		highlightFontSize: 8,
		highlightFontWeight: "normal",
		labelProperty: "label",
		mouseCursor: "pointer",
		opacity: 1,
		renderLabel: false,
		semanticStrokeWidth: true,
		strokeWidth: 2,
		markerHeight: 50,
		markerWidth: 10,
		color: "#535353",
	},
};

function EmptyScreen() {
	return <h1>Please add courses</h1>;
}

// TODO
function GraphViewGenerator({ course }) {
	if (course.id === "emptyAnchor") {
		return <div></div>;
	}
	return <CourseCard course={course} />;
}

export default GraphView;
