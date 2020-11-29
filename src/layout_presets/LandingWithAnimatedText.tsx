import * as React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import CustomContainer from "../components/CustomContainer";
import BigText from "../components/BigText";
import Paragraph from "../components/Paragraph";
import { animations, colors } from "../ThemeConfig";
import VictorImg from "../img/Victor.jpg";
import { init } from "ityped";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../components/Skills";

function LandingWithAnimatedText() {
  React.useEffect(() => {
    const animatedText = document.querySelector("#animatedText");
    init(animatedText ?? "", {
      showCursor: false,
      typeSpeed: 110,
      backSpeed: 20,
      startDelay: 250,
      backDelay: 400,
      strings: ["experiences", "interfaces", "applications"],
    });
  }, []);
  return (
    <Hero flex width="100%" height="100%">
      <Container className="py-5">
        <Row className="align-items-center py-lg-5">
          <Col lg={8} className={"mb-5 mb-lg-0 py-lg-5"}>
            <CustomContainer width="100%" flex>
              <Paragraph fontSize="1.1rem" margin="0">
                Hello. I am Victor Smith
              </Paragraph>
              <BigText
                elementColor={colors.grey}
                fontSize="4rem"
                lineHeight="4.5rem"
                margin="0 0 5rem 0"
              >
                I build {window.innerWidth < 650 ? <br /> : " "}
                <span
                  id="animatedText"
                  style={{ color: colors.primary }}
                ></span>
                <br /> for the web.
              </BigText>
              <Button
                whileHover={animations.button_filled_move_up}
                borderRadius="50px"
                fontColor={colors.navy_blue}
                uppercase
              >
                Contact Me
              </Button>
            </CustomContainer>
          </Col>
          <Col lg={4} md={8} sm={9} className="py-lg-5">
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
              src={VictorImg}
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <div style={{ height: 1000 }}></div>
      <Skills
        skills={[
          {
            completionPercentage: 30,
            fillerColor: "#64FF8F",
            skillName: "HTML",
          },
          {
            completionPercentage: 70,
            fillerColor: "#64FF8F",
            skillName: "CSS",
          },
          {
            completionPercentage: 90,
            fillerColor: "#64FF8F",
            skillName: "JavaScript",
          },
        ]}
      />
    </Hero>
  );
}

export default LandingWithAnimatedText;
