import * as React from "react";
import ProgressBar from "./ProgressBar";
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
  return (
    <div style={{ width: "80%", height: "100%", margin: "50px auto" }}>
      {ProgressBars}
    </div>
  );
};

export default Skills;
