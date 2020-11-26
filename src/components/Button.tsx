import * as React from "react";
import styled from "styled-components";
import AbstractTextInterface from "../interfaces/AbstractTextInterface";
import { colors } from "../ThemeConfig";

interface ButtonProps extends AbstractTextInterface {
  readonly outline?: boolean;
  readonly borderRadius?: string;
}
let StyledButton = styled.button<ButtonProps>`
  border-radius: ${(props) => props.borderRadius || "0.625rem"};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize || "1rem"};
  font-family: inherit;
  font-weight: ${(props) => props.fontWeight || ""};
  padding: ${(props) => props.padding || "1rem 4rem"};
  color: ${(props) => props.fontColor || colors.primary};
  background-color: ${(props) =>
    props.outline ? "transparent" : props.color || colors.primary};
  border: 3px solid ${(props) => props.color || colors.primary};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
