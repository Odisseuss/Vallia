import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../components/Skills";
import BigText from "../components/BigText";
import { colors } from "../ThemeConfig";
interface MySkillsProps {}

const MySkills: React.FunctionComponent<MySkillsProps> = () => {
  return (
    <React.Fragment>
      <Container className="my-5">
        <Row className="mt-5">
          <Col>
            <BigText
              fontSize={"4rem"}
              elementColor={"#E6E6E6"}
              fontWeight={"800"}
              textAlign={"center"}
            >
              My Skills
            </BigText>
          </Col>
        </Row>
      </Container>
      <Skills
        skills={[
          {
            completionPercentage: 30,
            fillerColor: colors.primary,
            skillName: "HTML",
          },
          {
            completionPercentage: 70,
            fillerColor: colors.primary,
            skillName: "CSS",
          },
          {
            completionPercentage: 90,
            fillerColor: colors.primary,
            skillName: "JavaScript",
          },
        ]}
      />
    </React.Fragment>
  );
};

export default MySkills;
