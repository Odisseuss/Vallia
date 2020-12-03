import * as React from "react";
import styled from "styled-components";
import AbstractTextInterface from "../interfaces/AbstractTextInterface";
import { colors } from "../ThemeConfig";

interface ParagraphProps extends AbstractTextInterface {}

let StyledParagraph = styled.p<ParagraphProps>`
  color: ${(props) => props.elementColor || colors.darker_grey};
  width: ${(props) => props.width || "55%"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  line-height: ${(props) => props.lineHeight || "1.5rem"};
  font-weight: ${(props) => props.fontWeight || ""};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "1rem 0 4rem 0"};
  padding: ${(props) => props.padding || ""};
}
`;

const Paragraph: React.FunctionComponent<ParagraphProps> = (props) => {
  return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
};

export default Paragraph;
