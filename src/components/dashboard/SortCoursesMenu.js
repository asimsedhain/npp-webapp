import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Menu, MenuItem, Divider } from "@material-ui/core";
import { sortListByName, sortListByLevel } from "../../redux";

export default function SortMenue({id}) {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<ListTitleSideButton onClick={handleClick}>...</ListTitleSideButton>
			<StyledMenu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<SortMenuText> Sort By </SortMenuText>
				<Divider />
				<MenuItem
					onClick={() => {
						handleClose();
						dispatch(sortListByName(id));
					}}
				>
					Name
				</MenuItem>
				<MenuItem onClick={handleClose}>Prerequisite</MenuItem>
				<MenuItem onClick={handleClose}>Semester</MenuItem>
				<MenuItem onClick={() => {
						handleClose();
						dispatch(sortListByLevel(id));
					}}>Level</MenuItem>
			</StyledMenu>
		</>
	);
}

const SortMenuText = styled.div`
	font-weight: bold;
	text-align: center;
	font-size: 1rem;
`;

const StyledMenu = styled(Menu)`
	& div {
		border-radius: 0px;
	}
`;
const ListTitleSideButton = styled.div`
	font-weight: bold;
	margin-left: 10px;
	cursor: pointer;
	padding: 0px 5px;

	&:hover {
		background: white;
		border-radius: 5px;
	}
`;
