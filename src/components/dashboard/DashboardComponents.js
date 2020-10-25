import styled from "styled-components";
const DroppableListContainer = styled.div`
	background: white;
	//width: calc(100vw - 40px);
	height: calc(100vh - 75px - 40px);
	//margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, minmax(300px, 1fr));
	grid-gap: 15px;
	padding: 20px;
	overflow-y: hidden;
	//overflow-x: auto;
`;

const Container = styled.div`
	display: ${(props) => (props.split ? "grid" : "block")};
	grid-template-columns: ${(props) => props.split && "2fr 1fr"};
	height: calc(100vh - 75px - 40px);
	overflow-y: hidden;

`;
export { DroppableListContainer, Container };
