import * as React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import CustomContainer from "../components/CustomContainer";
import BigText from "../components/BigText";
import Paragraph from "../components/Paragraph";
import { animations } from "../ThemeConfig";

function LandingWithSVGBackground() {
  return (
    <Hero withSVG flex>
      <CustomContainer margin="0 0 0 10%" flex>
        <BigText uppercase>
          company <br /> name
        </BigText>
        <Paragraph>
          Shaman dreamcatcher everyday carry yr kale chips. Church-key scenester
          semiotics marfa gluten-free enamel pin. Trust fund post-ironic
          actually chillwave pop-up heirloom.
        </Paragraph>
        <Button
          whileHover={animations.button_outline_move_up_and_fill}
          outline
          uppercase
        >
          Contact Us
        </Button>
      </CustomContainer>
    </Hero>
  );
}

export default LandingWithSVGBackground;
