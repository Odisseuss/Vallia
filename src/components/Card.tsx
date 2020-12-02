import * as React from "react";
import styled from "styled-components";
import { ReactComponent as BeenHereIcon } from "../svg/BeenHere.svg";
import { ReactComponent as ChartIcon } from "../svg/Chart.svg";
import { ReactComponent as CloudIcon } from "../svg/Cloud.svg";
import { ReactComponent as FacebookIcon } from "../svg/Facebook.svg";
import { ReactComponent as MoneyIcon } from "../svg/Money.svg";
import { ReactComponent as WhatshotIcon } from "../svg/Whatshot.svg";
import { colors } from "../ThemeConfig";
import BigText from "./BigText";
import Paragraph from "./Paragraph";

let CardContainer = styled.div<CardProps>`
  background-color: #172a45;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "start")};
  padding: 20px;
  margin: 1rem 0;
`;

interface CardProps {
  readonly centered?: boolean;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <CardContainer {...props}>
      <MoneyIcon fill={colors.primary} width="4rem" height="4rem" />
      <BigText
        padding="1rem 0 0 0"
        fontSize={"1.5rem"}
        elementColor={"#E6E6E6"}
        lineHeight={"1.5rem"}
        fontWeight={"600"}
      >
        Cost Effective
      </BigText>
      <Paragraph
        textAlign={props.centered ? "center" : "left"}
        elementColor={"#E6E6E6"}
        width="100%"
        fontSize={"1rem"}
        lineHeight={"1rem"}
        margin="1.5rem 0 !important"
      >
        Fanny pack health goth 8-bit ennui. Selfies thundercats glossier cronut
        90's tousled, church-key forage bushwick PBR&B meh neutra tattooed man
        bun asymmetrical.
      </Paragraph>
    </CardContainer>
  );
};

export default Card;
