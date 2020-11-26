import * as React from "react";
import { ReactComponent as ReactLogo } from "../svg/Background.svg";
import { renderToStaticMarkup } from "react-dom/server";
import styled from "styled-components";
import { colors } from "../ThemeConfig";

interface BackgroundProps {
  readonly backgroundColor?: string;
  readonly backgroundSvgColor?: string;
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
let BackgroundContainer = styled.div<BackgroundProps>`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.backgroundColor || colors.navy_blue};
  ${(props) =>
    props?.flex
      ? `display: flex;\nflex-direction: ${
          props.flexDirection ?? "column"
        };\njustify-content: ${
          props.justifyContent ?? "center"
        };\nalign-items: ${props.alignItems ?? "start"};`
      : ""}
  background-repeat: no-repeat;
  background-size: cover;
}
`;

const Hero: React.FunctionComponent<BackgroundProps> = (props) => {
  const svgString = encodeURIComponent(
    renderToStaticMarkup(
      <ReactLogo
        fill={props.backgroundSvgColor || colors.lightest_grey + "05"}
      />
    )
  );
  let svgBackground = `url('data:image/svg+xml,${svgString}')`;
  return (
    <BackgroundContainer style={{ backgroundImage: svgBackground }} {...props}>
      {props.children}
    </BackgroundContainer>
  );
};

export default Hero;
