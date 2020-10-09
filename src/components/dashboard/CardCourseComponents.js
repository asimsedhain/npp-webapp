import React from "react";
import { Button, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import { CardBorder, StyledCard } from "./StyledDashboardComponents";

const CardCourse = ({ text, onClickFunction, bgColor }) => {
    return (
        <StyledCard>
            <CardBorder bgColor={bgColor}>
                <Typography variant="subtitle"> {text}
                    <Button onClick={() => onClickFunction()}>
                        <RemoveIcon> </RemoveIcon></Button>
                </Typography>
            </CardBorder>
        </StyledCard>
    );
};

export { CardCourse };