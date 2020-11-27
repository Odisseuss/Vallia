import * as React from "react";
import styled from "styled-components";
import AbstractTextInterface from "../interfaces/AbstractTextInterface";
import { colors } from "../ThemeConfig";
import { HTMLMotionProps, motion } from "framer-motion/";

interface ButtonProps extends AbstractTextInterface, HTMLMotionProps<"button"> {
  readonly outline?: boolean;
  readonly borderRadius?: string;
}
let StyledButton = styled(motion.button)<ButtonProps>`
  border-radius: ${(props) => props.borderRadius || "0.625rem"};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize || "1rem"};
  font-family: inherit;
  font-weight: ${(props) => props.fontWeight || "600"};
  padding: ${(props) => props.padding || "1rem 4rem"};
  color: ${(props) => props.fontColor || colors.primary};
  background-color: ${(props) =>
    props.outline ? "transparent" : props.elementColor || colors.primary};
  border: 3px solid ${(props) => props.elementColor || colors.primary};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
