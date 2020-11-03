import React from "react";
import styled from "styled-components";
import { Graph } from "react-d3-graph";
import { CourseCard } from "./DraggableCourseCard";
import courseData from "./data";

function GraphView() {
	return (
		<StyledDiv>
		<Graph
			id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
			data={data}
			config={graphConfig}
			onDoubleClickNode={()=>{console.log("node")}}
			onClickLink={()=>{console.log("link")}}
			onClickNode={()=>{console.log("node")}}
			onDoubleClickLink={()=>{console.log("link")}}
		/>
		</StyledDiv>
	);
}



const StyledDiv  = styled.div`
	height: calc(100vh - 75px);
	& #graph-id-graph-wrapper{
		height: 100%;
		width: 100%;
	}
	& #graph-id-graph-wrapper [name=svg-container-graph-id]{
		height: 100%!important;
		width: 100%!important;
	}
`

const data = {
	nodes: [{ id: "Computer Science" }, { id: "Fall 2020" }],
	links: [{ source: "Computer Science", target: "Fall 2020" }],
};

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
		linkLength: 10000,
		disableLinkForce: false,
		linkStrength: 0.004,
		gravity: -100,
	},
	node: {
		opacity: 1,
		renderLabel: false,
		size: { width: 5000, height: 2000 },

		viewGenerator: () => <CourseCard course={courseData[0]}></CourseCard>,
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

export default GraphView;

