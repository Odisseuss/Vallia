import * as React from "react";
import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ContainerProps extends HTMLMotionProps<"div"> {
  readonly height?: string;
  readonly width?: string;
  readonly backgroundColor?: string;
  readonly margin?: string;
  readonly border?: string;
  readonly padding?: string;
  readonly borderRadius?: string;
  readonly flex?: boolean;
  readonly flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
  readonly justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  readonly alignItems?: "center" | "start" | "end" | "stretch";
}
let StyledContainer = styled(motion.div)<ContainerProps>`
    background-color: ${(props) => props.backgroundColor ?? ""};
    height: ${(props) => props.height ?? ""};
    width: ${(props) => props.width ?? ""};
    ${(props) =>
      props?.flex
        ? `display: flex;\nflex-direction: ${
            props.flexDirection ?? "column"
          };\njustify-content: ${
            props.justifyContent ?? "center"
          };\nalign-items: ${props.alignItems ?? "start"};`
        : ""}
    margin: ${(props) => props.margin ?? ""};
    padding: ${(props) => props.padding ?? ""};
    border-radius: ${(props) => props.borderRadius ?? ""};
    border: ${(props) => props.border ?? ""};
  }
  `;

const CustomContainer: React.FunctionComponent<ContainerProps> = (props) => {
  return <StyledContainer {...props}></StyledContainer>;
};

export default CustomContainer;
