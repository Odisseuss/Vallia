/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from "react";
import styled from "styled-components";
import { jsx } from "theme-ui";
import { color, ColorProps, space } from "styled-system";

interface ButtonProps extends ColorProps {}
const StyledButton = styled.button<ButtonProps>`
  ${color}
  ${space}
`;
// If a prop that changes the css is applied to the button after importing it in another file
// then it will override the default config specified by sx
// Note to self: Don't include animations in every object, instead create some wrapper objects that can add animations to the object
const Button: React.FunctionComponent<ButtonProps & { as?: any }> = (props) => {
  return (
    <StyledButton sx={{ bg: "greys.300" }} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
