import * as React from "react";
import styled from "styled-components";

interface ContainerProps {
  readonly height?: string;
  readonly width?: string;
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
let StyledContainer = styled.div<ContainerProps>`
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
    margin-left: 10%;
  }
  `;

const Container: React.FunctionComponent<ContainerProps> = (props) => {
  return <StyledContainer {...props}></StyledContainer>;
};

export default Container;
