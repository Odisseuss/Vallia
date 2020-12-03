import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card";
import { colors } from "../ThemeConfig";
import { ReactComponent as CokeIcon } from "../svg/conk.svg";
import BigText from "../components/BigText";
import Paragraph from "../components/Paragraph";
import CustomContainer from "../components/CustomContainer";

let logos = [
  <CokeIcon fill={colors.lighter_grey} width="6rem" height="6rem" />,
  <CokeIcon fill={colors.lighter_grey} width="6rem" height="6rem" />,
  <CokeIcon fill={colors.lighter_grey} width="6rem" height="6rem" />,
  <CokeIcon fill={colors.lighter_grey} width="6rem" height="6rem" />,
  <CokeIcon fill={colors.lighter_grey} width="6rem" height="6rem" />,
  <CokeIcon fill={colors.lighter_grey} width="6rem" height="6rem" />,
];
const OurClients: React.FunctionComponent = () => {
  let clients = logos.map((logo, index) => (
    <Col key={index} lg={4} md={6} sm={6} xs={12} style={{ padding: 0 }}>
      <CustomContainer
        border={`1px solid ${colors.lightest_grey}`}
        height={"100%"}
        padding={"20px"}
        margin={"1rem 0"}
        flex
        justifyContent={"center"}
        alignItems={"center"}
      >
        {logo}
      </CustomContainer>
    </Col>
  ));

  return (
    <Container style={{ marginBottom: "3rem" }}>
      <Row>
        <Col>
          <BigText
            textAlign={"center"}
            fontSize={"4.2rem"}
            lineHeight={"4.2rem"}
            margin={"2rem 0"}
            elementColor={colors.primary}
          >
            Our Clients
          </BigText>
        </Col>
      </Row>
      <Row className="p-3">
        <Col lg={12}>
          <Row>{clients}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default OurClients;
