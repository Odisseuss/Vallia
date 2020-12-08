import * as React from "react";
import styled from "styled-components";
import BigText from "../components/BigText";
import CustomContainer from "../components/CustomContainer";
import Paragraph from "../components/Paragraph";
import { colors } from "../ThemeConfig";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "../components/Form";

export interface GetInTouchWithFormProps {}

const GetInTouchWithForm: React.FunctionComponent<GetInTouchWithFormProps> = (
  props
) => {
  return (
    <Container style={{ marginTop: "10rem" }}>
      <Row>
        <Col md={6} xs={12} className="mb-4">
          <CustomContainer
            flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <BigText
              fontSize="3rem"
              lineHeight="3rem"
              elementColor={colors.lightest_grey}
            >
              Get In Touch
            </BigText>
            <Paragraph fontSize="1.1rem" width="100%" margin="2rem 0">
              I am available for freelance work. Connect with me via email:
            </Paragraph>
            <Form
              values={{ name: "", email: "", subject: "", message: "" }}
              inputProps={{}}
            />
          </CustomContainer>
        </Col>
        <Col
          md={6}
          xs={12}
          style={{ alignSelf: "center", justifySelf: "center" }}
        >
          <CustomContainer
            backgroundColor={"#172A45"}
            flex
            width="100%"
            borderRadius="10px"
            padding="1rem"
            margin="0 auto"
            flexDirection="column"
            alignItems="start"
            justifyContent="space-evenly"
          >
            <CustomContainer margin="1rem 0">
              <Paragraph fontSize="1.1rem" width="100%" margin="0">
                Email me at:
              </Paragraph>
              <Paragraph
                fontSize="1.1rem"
                width="100%"
                margin="0"
                elementColor={colors.primary}
              >
                john@vallia.com
              </Paragraph>
            </CustomContainer>
            <CustomContainer margin="1rem 0">
              <Paragraph fontSize="1.1rem" width="100%" margin="0">
                Call me:
              </Paragraph>
              <Paragraph
                fontSize="1.1rem"
                width="100%"
                margin="0"
                elementColor={colors.primary}
              >
                +40728302750
              </Paragraph>
            </CustomContainer>
          </CustomContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouchWithForm;
