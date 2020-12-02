import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchCourses} from "../../redux"
import styled from "styled-components";
import { TextField, InputAdornment, CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ErrorIcon from "@material-ui/icons/Error";

function SidePanel({ children }) {
	const { sidePanelLoading, sidePanelError } = useSelector((state) => {
		return state.courses;
	});
	const dispatch = useDispatch()
	const [searchKey, setSearchKey] = useState("");

	return (
		<SidePanelContainer>
			<SidePanelHeader>Courses Offered</SidePanelHeader>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					dispatch(fetchCourses(searchKey))
				}}
			>
				<NavBarSearchField
					value={searchKey}
					onChange={(e) => {
						setSearchKey(e.target.value);
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end" type="submit">
								<NavbarSearchIcon />
							</InputAdornment>
						),
					}}
				/>
				{sidePanelLoading || sidePanelError ? (
					<InfoContainer>
						{sidePanelError ? (
							<>
								<ErrorIcon />
								<h2>{sidePanelError}</h2>
							</>
						) : (
							<CircularProgress />
						)}
					</InfoContainer>
				) : (
					children
				)}
			</form>
		</SidePanelContainer>
	);
}

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	& div {
		margin-bottom: calc(100vh - 55px - 100%);
		width: 70px !important;
		height: 70px !important;
		color: #092d74;
	}
	& h2 {
		margin-bottom: calc(100vh - 55px - 100%);
		color: white;
	}
	& svg {
		color: white;
		width: 70px !important;
		height: 70px !important;
	}
`;

const SidePanelHeader = styled.div`
	font-weight: bold;
	font-family: Roboto, sans-serif;
	font-size: 1.5rem;
	background-color: #353842;
	color: white;
	padding: 10px 35px;
`;

const SidePanelContainer = styled.div`
	background-color: #e55204;
	height: calc(100vh - 55px);
	overflow-y: hidden;
`;

const NavBarSearchField = styled(TextField)`
	background: white;
	margin: auto 0;
	margin: 10px;
	width: calc(100% - 20px);
`;

const NavbarSearchIcon = styled(SearchIcon)`
	fill: grey;
`;

export default SidePanel;
