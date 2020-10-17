import React from "react";
import { Button, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import { CardBorder, StyledCard } from "./StyledDashboardComponents";

const CardCourse = ({children, onClickFunction, accentColor}) => {
    return (
        <StyledCard>
            <CardBorder bgColor={accentColor}>
                <Typography > {children}
                    <Button onClick={() => onClickFunction()}>
                        <RemoveIcon> </RemoveIcon></Button>
                </Typography>
            </CardBorder>
        </StyledCard>
    );
};

export { CardCourse };
