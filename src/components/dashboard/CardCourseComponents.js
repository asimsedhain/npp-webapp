import React from "react";
import { Button, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutline";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import { CardBorder, StyledCard } from "./StyledDashboardComponents";

const CardCourse = ({ children, onClickFunction, accentColor, addIcon }) => {
	return (
		<StyledCard>
			<CardBorder bgColor={accentColor}>
				<Typography>
					{" "}
					{children}
					<Button onClick={() => onClickFunction()}>
						{addIcon ? <AddIcon /> : <RemoveIcon />}
					</Button>
				</Typography>
			</CardBorder>
		</StyledCard>
	);
};

export { CardCourse };
