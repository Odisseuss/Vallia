import * as React from "react";
import styled from "styled-components";
import BigText from "../components/BigText";
import CustomContainer from "../components/CustomContainer";
import Paragraph from "../components/Paragraph";
import { colors } from "../ThemeConfig";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import PhilipImage from "../img/Phillip.jpg";
import Form from "../components/Form";

let StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export interface GetInTouchWithFormAndPictureProps {}

const GetInTouchWithFormAndPicture: React.FunctionComponent<GetInTouchWithFormAndPictureProps> = (
  props
) => {
  return (
    <Container>
      <Row>
        <Col
          lg={6}
          md={12}
          className="mb-4 mb-lg-0"
          style={{ alignSelf: "center" }}
        >
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
          lg={{ span: 6, order: "last" }}
          md={{ span: 12, order: "first" }}
          className={"mb-4 mb-lg-0"}
        >
          <StyledImage src={PhilipImage} />
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouchWithFormAndPicture;
