import * as React from "react";
import ProgressBar from "./ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface SkillProps {
  skillName: string;
  completionPercentage: number;
  fillerColor: string;
}

interface SkillsProps {
  skills: Array<SkillProps>;
}

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  let ProgressBars = props.skills.map((skillDetails, index) => (
    <ProgressBar
      key={index}
      fillerBarProps={{
        completionPercentage: skillDetails.completionPercentage,
        backgroundColor: skillDetails.fillerColor,
      }}
      percentageTextProps={{
        fontColor: "#939393",
        fontSize: "1.1rem",
        fontWeight: "800",
      }}
      outerBarProps={{}}
      skillTextProps={{
        content: skillDetails.skillName,
        fontColor: "#E6E6E6",
        fontSize: "1.1rem",
        fontWeight: "800",
      }}
    />
  ));
  var barPairs: Array<Array<JSX.Element>> = [];
  for (var i = 0, j = 0; i < ProgressBars.length; i++) {
    if (i >= 2 && i % 2 === 0) j++;
    barPairs[j] = barPairs[j] || [];
    barPairs[j].push(ProgressBars[i]);
  }
  return (
    <Container className="py-5">
      {barPairs.map(([bar_1, bar_2], index) => (
        <Row key={index}>
          <Col sm={12} md={6}>
            {bar_1}
          </Col>
          <Col sm={12} md={6}>
            {bar_2}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Skills;
