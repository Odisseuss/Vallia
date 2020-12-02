import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Card from "./Card";

const AboutCards: React.FunctionComponent = () => {
  return (
    <Container>
      <Row className="p-3">
        <Col lg={12}>
          <Row>
            <Col lg={4} md={6} sm={6} xs="12">
              <Card />
            </Col>
            <Col lg={4} md={6} sm={6} xs="12">
              <Card />
            </Col>
            <Col lg={4} md={6} sm={6} xs="12">
              <Card />
            </Col>
            <Col lg={4} md={6} sm={6} xs="12">
              <Card />
            </Col>
            <Col lg={4} md={6} sm={6} xs="12">
              <Card />
            </Col>
            <Col lg={4} md={6} sm={6} xs="12">
              <Card />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCards;
