import * as React from "react";
import styled from "styled-components";
import { animations } from "../ThemeConfig";

import BigText from "./BigText";
import CustomContainer from "./CustomContainer";
import { ContainerProps } from "./CustomContainer";
import Paragraph from "./Paragraph";

interface CardProps extends ContainerProps {
  readonly centered?: boolean;
  readonly title?: string;
  readonly text?: string;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <CustomContainer {...props} whileHover={animations.move_up}>
      {props.children}
      <BigText
        padding="1rem 0 0 0"
        fontSize={"1.5rem"}
        elementColor={"#E6E6E6"}
        lineHeight={"1.5rem"}
        fontWeight={"600"}
      >
        {props.title}
      </BigText>
      <Paragraph
        textAlign={props.centered ? "center" : "left"}
        elementColor={"#E6E6E6"}
        width="100%"
        fontSize={"1rem"}
        lineHeight={"1rem"}
        margin="1.5rem 0 !important"
      >
        {props.text}
      </Paragraph>
    </CustomContainer>
  );
};

export default Card;
