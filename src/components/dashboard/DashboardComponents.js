import styled from "styled-components";
const DroppableListContainer = styled.div`
	background: white;
	height: calc(100vh - 55px - 40px);
	display: grid;
	grid-template-columns: repeat(3, minmax(300px, 1fr));
	grid-template-rows: calc(100vh - 55px - 40px);
	grid-gap: 15px;
	@media (max-width: 767px) {
	height: calc(100vh - 55px - 10px);
		grid-gap: 10px;
		grid-template-rows: calc(100vh - 55px - 10px);
	}
	overflow-y: hidden;
	overflow-x: auto;
`;

const Container = styled.div`
	display: ${(props) => (props.split ? "grid" : "block")};
	grid-template-columns: ${(props) => props.split && "2fr 1fr"};
	@media (max-width: 767px) {
		grid-template-columns: ${(props) => props.split && "1fr 1fr"};
	}
`;

const PaddingContainer = styled.div`
	overflow: hidden;
	padding: 20px;
	@media (max-width: 767px) {
		padding: 5px;
	}
	padding-right: ${(props) => props.split && "0px"};
	
`;
export { DroppableListContainer, Container, PaddingContainer };
