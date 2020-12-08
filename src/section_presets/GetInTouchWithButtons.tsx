import * as React from "react";
import styled from "styled-components";
import BigText from "../components/BigText";
import CustomContainer from "../components/CustomContainer";
import Paragraph from "../components/Paragraph";
import { ReactComponent as MailIcon } from "../svg/Mail.svg";
import { ReactComponent as PhoneIcon } from "../svg/Phone.svg";
import { animations, colors } from "../ThemeConfig";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export interface GetInTouchWithButtonsProps {}

const GetInTouchWithButtons: React.FunctionComponent<GetInTouchWithButtonsProps> = (
  props
) => {
  return (
    <CustomContainer
      width="100%"
      flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <BigText fontSize="3rem" fontColor={colors.lightest_grey}>
        Get In Touch
      </BigText>
      <Paragraph fontSize="1.1rem" textAlign="center">
        I am available for freelance work. Connect with me via phone or email:
      </Paragraph>
      <Container>
        <Row className="px-md-5">
          <Col sm={12} md={6} className="mb-sm-4 ">
            <CustomContainer
              style={{ cursor: "pointer" }}
              whileHover={animations.move_up}
              backgroundColor={colors.primary}
              borderRadius="15px"
              width="80%"
              margin="0 auto"
              flex
              justifyContent="center"
              alignItems="center"
              height="10rem"
            >
              <MailIcon width="4rem" height="4rem" fill={colors.navy_blue} />
            </CustomContainer>
          </Col>
          <Col sm={12} md={6}>
            <CustomContainer
              style={{ cursor: "pointer" }}
              whileHover={animations.move_up}
              backgroundColor={colors.primary}
              borderRadius="15px"
              margin="0 auto"
              width="80%"
              flex
              height="10rem"
              justifyContent="center"
              alignItems="center"
            >
              <PhoneIcon width="4rem" height="4rem" fill={colors.navy_blue} />
            </CustomContainer>
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default GetInTouchWithButtons;
