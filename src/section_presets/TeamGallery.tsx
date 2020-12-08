import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Annie from "../img/Annie.jpg";
import Mike from "../img/Mike.jpg";
import Ken from "../img/Ken.jpg";
import TeamCard from "../components/TeamCard";
import BigText from "../components/BigText";
import { colors } from "../ThemeConfig";

let cardsData = [
  {
    title: "Mike Santoro",
    description: "President and Partner",
    image: Mike,
  },
  {
    title: "Annie Gudorf",
    description: "President and Partner",
    image: Annie,
  },
  {
    title: "Ken Gaebler",
    description: "President and Partner",
    image: Ken,
  },
];

const TeamGallery: React.FunctionComponent = () => {
  let cards = cardsData.map((card, index) => (
    <Col key={index} lg={4} md={12} sm={12} xs={12}>
      <TeamCard
        description={card.description}
        title={card.title}
        image={card.image}
        titleInset
      />
    </Col>
  ));
  return (
    <Container id="team" style={{ marginBottom: 200 }}>
      <Row>
        <Col>
          <BigText
            textAlign={"center"}
            fontSize={"4.2rem"}
            lineHeight={"4.2rem"}
            elementColor={colors.lightest_grey}
          >
            The Team
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

export default TeamGallery;
