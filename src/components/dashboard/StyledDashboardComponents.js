import { Card } from "@material-ui/core";
import styled from "styled-components";

const CardBorder = styled.div`
      border-radius: 0 3px 3px 0;
      background: #FEFAFA;
      border-left: ${props => "7px solid " + props.bgColor};
      padding: 0px 10px;
`;

const StyledCard = styled(Card)`
      background: #FEFAFA;
      color: #0B45B8;
      height: 35px;
`;

export { CardBorder, StyledCard };

