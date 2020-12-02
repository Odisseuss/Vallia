import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Card from "./Card";
import ChevyImg from "../img/Chevy.jpg";
import BigText from "./BigText";
import CustomContainer from "./CustomContainer";
import Paragraph from "./Paragraph";
import { colors } from "../ThemeConfig";

const AboutPictureText: React.FunctionComponent = () => {
  return (
    <Container
      style={{
        marginTop: "10rem",
        marginBottom: "10rem",
      }}
    >
      <Row>
        <Col lg={5} md={12}>
          <img
            src={ChevyImg}
            alt=""
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: 15,
              translate: "x: 100px",
            }}
          />
        </Col>
        <Col lg={7} md={12}>
          <CustomContainer>
            <BigText
              elementColor={colors.lightest_grey}
              fontSize={"4.5rem"}
              lineHeight={"4.5rem"}
            >
              About
            </BigText>
            <Paragraph
              width={"100%"}
              elementColor={colors.darker_grey}
              fontSize={"1.1rem"}
              lineHeight={"1.1rem"}
            >
              Shaman tumeric hell of kickstarter, four dollar toast small batch
              cornhole health goth narwhal organic migas cred blog seitan
              cold-pressed. Mumblecore tattooed live-edge mustache vexillologist
              gentrify distillery leggings meh forage plaid marfa yuccie food
              truck edison bulb.
            </Paragraph>
          </CustomContainer>
          <Row>
            <Col lg={6} md={12} sm={12} xs={12}>
              <BigText
                elementColor={colors.lightest_grey}
                fontSize={"2.2rem"}
                lineHeight={"2.2rem"}
              >
                About
              </BigText>
              <Paragraph
                width={"100%"}
                elementColor={colors.darker_grey}
                fontSize={"1.1rem"}
                lineHeight={"1.1rem"}
              >
                Shaman tumeric hell of kickstarter, four dollar toast small
                batch cornhole health goth narwhal organic migas cred blog
                seitan cold-pressed. Mumblecore tattooed live-edge mustache
                vexillologist gentrify distillery leggings meh forage plaid
                marfa yuccie food truck edison bulb.
              </Paragraph>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <BigText
                elementColor={colors.lightest_grey}
                fontSize={"2.2rem"}
                lineHeight={"2.2rem"}
              >
                About
              </BigText>
              <Paragraph
                width={"100%"}
                elementColor={colors.darker_grey}
                fontSize={"1.1rem"}
                lineHeight={"1.1rem"}
              >
                Shaman tumeric hell of kickstarter, four dollar toast small
                batch cornhole health goth narwhal organic migas cred blog
                seitan cold-pressed. Mumblecore tattooed live-edge mustache
                vexillologist gentrify distillery leggings meh forage plaid
                marfa yuccie food truck edison bulb.
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPictureText;
