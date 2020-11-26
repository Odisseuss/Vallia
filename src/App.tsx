import * as React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Container from "./components/Container";
import BigText from "./components/BigText";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Hero flex>
        <Container flex>
          <BigText uppercase>
            company <br /> name
          </BigText>
          <Paragraph>
            Shaman dreamcatcher everyday carry yr kale chips. Church-key
            scenester semiotics marfa gluten-free enamel pin. Trust fund
            post-ironic actually chillwave pop-up heirloom.
          </Paragraph>
          <Button outline uppercase>
            Contact Us
          </Button>
        </Container>
      </Hero>
    </div>
  );
}

export default App;
