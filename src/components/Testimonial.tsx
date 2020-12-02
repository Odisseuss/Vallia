import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import BigText from "./BigText";
import Paragraph from "./Paragraph";
import { colors } from "../ThemeConfig";

const Testimonial: React.FunctionComponent = () => {
  return (
    <Container style={{ marginBottom: "100px" }}>
      <BigText fontSize={"18rem"} lineHeight={"1rem"} margin={"17rem 0 0 0"}>
        "
      </BigText>
      <Paragraph
        elementColor={colors.primary}
        fontSize={"2.2rem"}
        lineHeight={"2.2rem"}
        margin={"0 0 1rem 0"}
        width={"100%"}
        textAlign={"center"}
      >
        I'm baby pop-up put a bird on it 8-bit listicle. Adaptogen vaporware
        locavore woke, roof party typewriter cray aesthetic you probably haven't
        heard of them flexitarian letterpress pinterest distillery offal.
      </Paragraph>
      <Paragraph
        elementColor={colors.lightest_grey}
        fontSize={"1.2rem"}
        lineHeight={"1.2rem"}
        margin={"0"}
        width={"100%"}
        textAlign={"center"}
      >
        John Doe{" "}
        <span style={{ color: colors.darkest_grey }}>
          - CTO Samiro Boats, Inc
        </span>
      </Paragraph>
    </Container>
  );
};

export default Testimonial;
