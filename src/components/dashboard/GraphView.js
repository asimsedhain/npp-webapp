import React from "react";
import styled from "styled-components";
import {Graph} from 'react-d3-graph';
import {CourseCard} from "./DraggableCourseCard";
import courseData from "./data";

function GraphView(){
     return (
         <>
                 <Graph
      id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
      data={data}
      config={graphConfig}
      />
             
         </>
     )
 }
 
 const data = {
     nodes: [
         {id: 'Computer Science'},
         {id: 'Fall 2020'},
         {id: 'Spring 2020'},
         {id: 'Fall 2021'},
         {id: 'Spring 2021'},
         {id: 'Fall 2022'},
         {id: 'Spring 2022'},
         {id: 'COSC 3325'},
         {id: 'COSC 1111'},
         {id: 'COSC 2222'},
         {id: 'COSC 3333'},
         {id: 'COSC 4444'}
        
     ],
     links: [
         {source: 'Computer Science', target: 'Fall 2020'},
         {source: 'Computer Science', target: 'Spring 2020'},
         {source: 'Computer Science', target: 'Fall 2021'},
         {source: 'Computer Science', target: 'Spring 2021'},
         {source: 'Computer Science', target: 'Fall 2022'},
         {source: 'Computer Science', target: 'Spring 2022'},
         {source: 'Fall 2020', target: 'COSC 3325'},
         {source: 'Fall 2020', target: 'COSC 1111'},
         {source: 'Fall 2020', target: 'COSC 2222'},
         {source: 'Fall 2020', target: 'COSC 3333'},
         {source: 'Fall 2020', target: 'COSC 4444'}
 
 
 
     ]
 }
 
 const graphConfig =
 {
     "automaticRearrangeAfterDropNode": true,
     "collapsible": true,
     "directed": true,
     "focusAnimationDuration": 0.75,
     "focusZoom": 1,
     "height": 600,
     "highlightDegree": 2,
     "highlightOpacity": 0.2,
     "linkHighlightBehavior": true,
     "maxZoom": 20,
     "minZoom": 0.05,
     "nodeHighlightBehavior": true,
     "panAndZoom": false,
     "staticGraph": false,
     "staticGraphWithDragAndDrop": false,
     "width": 1000,
     "d3": {
       "alphaTarget": 0.05,
       "linkLength": 2000,
       "linkStrength": 1,
       "disableLinkForce": false,
       "gravity": 1
     },
     "node": {
       "color": "#d3d3d3",
       "fontColor": "black",
       "fontSize": 0,
       "fontWeight": "normal",
       "highlightColor": "red",
       "highlightFontSize": 14,
       "highlightFontWeight": "bold",
       "highlightStrokeColor": "red",
       "highlightStrokeWidth": 1.5,
       "mouseCursor": "crosshair",
       "opacity": 0.9,
       "renderLabel": true,
       "size": {width:2500, height:2000},
       "strokeColor": "none",
       "strokeWidth": 1.5,
       "svg": "",
       viewGenerator: (node) => <div><CourseCard course={courseData[0]}></CourseCard> </div>
       
     },
     "link": {
       "color": "lightgray",
       "fontColor": "black",
       "fontSize": 8,
       "fontWeight": "normal",
       "highlightColor": "red",
       "highlightFontSize": 8,
       "highlightFontWeight": "normal",
       "labelProperty": "label",
       "mouseCursor": "pointer",
       "opacity": 1,
       "renderLabel": false,
       "semanticStrokeWidth": true,
       "strokeWidth": 3,
       "markerHeight": 6,
       "markerWidth": 6
     }
   }
 
     const onClickGraph = function(event) {
         window.alert('Clicked the graph background');
    };
    
    const onClickNode = function(nodeId) {
         window.alert('Clicked node ${nodeId}');
    };
    
    const onDoubleClickNode = function(nodeId) {
         window.alert('Double clicked node ${nodeId}');
    };
    
    const onRightClickNode = function(event, nodeId) {
         window.alert('Right clicked node ${nodeId}');
    };
    
    const onMouseOverNode = function(nodeId) {
         window.alert(`Mouse over node ${nodeId}`);
    };
    
    const onMouseOutNode = function(nodeId) {
         window.alert(`Mouse out node ${nodeId}`);
    };
    
    const onClickLink = function(source, target) {
         window.alert(`Clicked link between ${source} and ${target}`);
    };
    
    const onRightClickLink = function(event, source, target) {
         window.alert('Right clicked link between ${source} and ${target}');
    };
    
    const onMouseOverLink = function(source, target) {
         window.alert(`Mouse over in link between ${source} and ${target}`);
    };
    
    const onMouseOutLink = function(source, target) {
         window.alert(`Mouse out link between ${source} and ${target}`);
    };
    
    const onNodePositionChange = function(nodeId, x, y) {
         window.alert(`Node ${nodeId} moved to new position x= ${x} y= ${y}`);
    };
 
     export default GraphView
 
 