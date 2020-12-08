import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card";
import { colors } from "../ThemeConfig";
import { ReactComponent as BeenHereIcon } from "../svg/BeenHere.svg";
import { ReactComponent as ChartIcon } from "../svg/Chart.svg";
import { ReactComponent as CloudIcon } from "../svg/Cloud.svg";
import { ReactComponent as FacebookIcon } from "../svg/Facebook.svg";
import { ReactComponent as MoneyIcon } from "../svg/Money.svg";
import { ReactComponent as WhatshotIcon } from "../svg/Whatshot.svg";
import BigText from "../components/BigText";
import Paragraph from "../components/Paragraph";

let cardsData = [
  {
    title: "Cost Effective",
    text:
      "Fanny pack health goth 8-bit ennui. Selfies thundercats glossier cronut 90's tousled, church-key forage bushwick PBR&B meh neutra tattooed man bun asymmetrical.",
    icon: <MoneyIcon fill={colors.primary} width="4rem" height="4rem" />,
  },
  {
    title: "Cloud Based",
    text:
      "Microdosing butcher polaroid cred. Cred palo santo af, sartorial shoreditch hashtag craft beer.",
    icon: <CloudIcon fill={colors.primary} width="4rem" height="4rem" />,
  },
  {
    title: "User Approved",
    text:
      "Marfa bespoke vice, man bun hot chicken occupy four dollar toast. Narwhal organic plaid, tousled banjo pok pok man bun VHS viral celiac hell of yuccie shoreditch.",
    icon: <BeenHereIcon fill={colors.primary} width="4rem" height="4rem" />,
  },
  {
    title: "Analytics Dashboard",
    text:
      "Bitters normcore tousled occupy photo booth. Kogi iPhone tote bag XOXO, disrupt chicharrones celiac.",
    icon: <ChartIcon fill={colors.primary} width="4rem" height="4rem" />,
  },
  {
    title: "Facebook Integration",
    text:
      "Fanny pack offal lyft kale chips vegan intelligentsia ethical squid viral. Pabst meditation ethical lomo bicycle rights, banh mi trust fund enamel pin gentrify.",
    icon: <FacebookIcon fill={colors.primary} width="4rem" height="4rem" />,
  },
  {
    title: "Used By Millions",
    text:
      "Fixie messenger bag hella pitchfork. Kombucha hella direct trade portland blue bottle microdosing kinfolk cornhole kogi umami vexillologist banh mi artisan.",
    icon: <WhatshotIcon fill={colors.primary} width="4rem" height="4rem" />,
  },
];

const AboutCards: React.FunctionComponent = () => {
  let cards = cardsData.map((card, index) => (
    <Col key={index} lg={4} md={6} sm={6} xs={12}>
      <Card
        backgroundColor={"#172a45"}
        height={"90%"}
        padding={"20px"}
        margin={"1rem 0"}
        borderRadius={"15px"}
        title={card.title}
        text={card.text}
      >
        {card.icon}
      </Card>
    </Col>
  ));
  return (
    <Container style={{ marginTop: "10rem" }}>
      <Row>
        <Col>
          <BigText
            textAlign={"center"}
            fontSize={"4.2rem"}
            lineHeight={"4.2rem"}
            elementColor={colors.lightest_grey}
          >
            About
          </BigText>
        </Col>
      </Row>
      <Row>
        <Col>
          <Paragraph
            textAlign={"center"}
            fontSize={"1.2rem"}
            lineHeight={"1.2rem"}
            width={"80%"}
            margin={"2rem auto"}
          >
            Shaman tumeric hell of kickstarter, four dollar toast small batch
            cornhole health goth narwhal organic migas cred blog seitan
            cold-pressed. Mumblecore tattooed live-edge mustache vexillologist
            gentrify distillery leggings meh forage plaid marfa yuccie food
            truck edison bulb.
          </Paragraph>
        </Col>
      </Row>
      <Row className="p-3">
        <Col lg={12}>
          <Row>{cards}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCards;
