import * as React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import CustomContainer from "../components/CustomContainer";
import BigText from "../components/BigText";
import Paragraph from "../components/Paragraph";
import { animations, colors } from "../ThemeConfig";
import VictorImg from "../img/Victor.jpg";
import { init } from "ityped";

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
    <Hero flex>
      <CustomContainer
        width="100%"
        flex
        flexDirection="row"
        justifyContent="center"
      >
        <CustomContainer
          width="80%"
          flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <CustomContainer width="100%" flex>
            <Paragraph fontSize="1.1rem" margin="0">
              Hello. I am Victor Smith
            </Paragraph>
            <BigText
              elementColor={colors.grey}
              fontSize="4.5rem"
              lineHeight="5rem"
              margin="0 0 5rem 0"
            >
              I build{" "}
              <span id="animatedText" style={{ color: colors.primary }}></span>
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

          <img
            style={{
              width: "30rem",
              height: "33rem",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            src={VictorImg}
            alt=""
          />
        </CustomContainer>
      </CustomContainer>
    </Hero>
  );
}

export default LandingWithAnimatedText;
