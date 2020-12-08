import * as React from "react";
import { colors } from "../ThemeConfig";
import styled from "styled-components";
import Paragraph from "./Paragraph";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <div style={{ width: "100%", marginTop: "8rem" }}>
      <Paragraph
        fontSize={"1rem"}
        elementColor={colors.darkest_grey}
        width="100%"
        textAlign="center"
      >
        Copyright©2020. All rights reserved. Digital Company
      </Paragraph>
    </div>
  );
};

export default Footer;
