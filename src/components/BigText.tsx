import * as React from "react";
import { colors } from "../ThemeConfig";
import styled from "styled-components";
import AbstractTextInterface from "../interfaces/AbstractTextInterface";

interface BrandingProps extends AbstractTextInterface {}

let Branding = styled.h1<BrandingProps>`
    color: ${(props) => props.color ?? colors.primary};
    font-size: ${(props) => props.fontSize ?? "7.8rem"};
    line-height: ${(props) => props.lineHeight ?? "7.8rem"};
    font-weight: ${(props) => props.fontWeight ?? "800"};
    margin: ${(props) => props.margin ?? "0"};
    text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
    text-align: ${(props) => props.textAlign ?? "left"};
  }
  `;

const BigText: React.FunctionComponent<BrandingProps> = (props) => {
  return <Branding {...props}>{props.children}</Branding>;
};

export default BigText;
