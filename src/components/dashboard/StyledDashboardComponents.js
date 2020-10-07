import { Card } from "@material-ui/core";
import styled from "styled-components";

const CardBorder = styled.div`
      border-radius: 0 3px 3px 0;
      background: #FEFAFA;
      color: #0B45B8;
      border-left: ${props => "7px solid " + props.bgColor};
      padding: 5px 10px;
`;

const StyledCard = styled(Card)`
        width: 23.5rem;
        background: #FEFAFA;
        color: #0B45B8;
        height: 35px;
		margin: 10px;		
`;

export { CardBorder, StyledCard };

