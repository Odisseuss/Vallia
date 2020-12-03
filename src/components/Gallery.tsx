import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";
import { colors } from "../ThemeConfig";
import Vearlinq from "../img/VearLinq.webp";
import Perdoo from "../img/Perdoo.webp";
import GalleryCard from "./GalleryCard";
import BigText from "./BigText";

let cardsData = [
  {
    title: "Vearlinq",
    description: "Enamel pin man bun pug",
    image: Vearlinq,
  },
  {
    title: "Perdoo",
    description: "Sriracha blog viral banjo cronut freegan",
    image: Perdoo,
  },
  {
    title: "Vearlinq",
    description: "Enamel pin man bun pug",
    image: Vearlinq,
  },
  {
    title: "Perdoo",
    description: "Sriracha blog viral banjo cronut freegan",
    image: Perdoo,
  },
];

const Gallery: React.FunctionComponent = () => {
  let cards = cardsData.map((card, index) => (
    <Col
      key={index}
      lg={6}
      md={12}
      sm={12}
      xs={12}
      style={{ overflow: "hidden" }}
    >
      <GalleryCard
        description={card.description}
        title={card.title}
        image={card.image}
        titleSlideIn
      />
    </Col>
  ));
  return (
    <Container>
      <Row>
        <Col>
          <BigText
            textAlign={"center"}
            fontSize={"4.2rem"}
            lineHeight={"4.2rem"}
            elementColor={colors.lightest_grey}
          >
            Work
          </BigText>
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

export default Gallery;
