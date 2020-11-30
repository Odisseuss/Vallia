import { HTMLMotionProps, motion, useAnimation } from "framer-motion";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import AbstractTextInterface from "../interfaces/AbstractTextInterface";
import { animations } from "../ThemeConfig";

interface OuterBarProps {}
interface FillerBarProps extends HTMLMotionProps<"div"> {
  completionPercentage: number;
  backgroundColor: string;
  fillerBarRef?: any;
}
interface SkillTextProps extends AbstractTextInterface {
  content: string;
}
interface ProgressBarProps {
  outerBarProps: OuterBarProps;
  fillerBarProps: FillerBarProps;
  percentageTextProps: AbstractTextInterface;
  skillTextProps: SkillTextProps;
}
let Bar = styled.div<OuterBarProps>`
  height: 10px;
  width: 100%;
  background-color: #666666;
  margin: 20px 25px;
`;
let Filler = styled(motion.div)<FillerBarProps>`
  height: 100%;
  width: ${(props) => props.completionPercentage}%;
  background-color: ${(props) => props.backgroundColor};
  border-radius: inherit;
  text-align: right;
`;
let PercentageText = styled.span<AbstractTextInterface>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
`;
let PercentageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
let SkillText = styled.span<SkillTextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
`;
let SkillContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const OuterBar: React.FunctionComponent<OuterBarProps> = (props) => {
  return <Bar {...props}>{props.children}</Bar>;
};
const FillerBar: React.FunctionComponent<FillerBarProps> = (props) => {
  return <Filler ref={props.fillerBarRef} {...props} />;
};
const ProgressBar: React.FunctionComponent<ProgressBarProps> = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ delay: 200 });

  React.useEffect(() => {
    if (inView) {
      console.log("in View");
      controls.start("full_width");
    } else {
      console.log("not in View");
    }
  }, [controls, inView]);
  return (
    <SkillContainer>
      <SkillText {...props.skillTextProps}>
        {props.skillTextProps.content}
      </SkillText>
      <PercentageContainer>
        <PercentageText {...props.percentageTextProps}>
          {props.fillerBarProps.completionPercentage}%
        </PercentageText>
        <OuterBar {...props.outerBarProps}>
          <FillerBar
            initial={"no_width"}
            variants={animations.progress_bar_fill(
              props.fillerBarProps.completionPercentage
            )}
            transition={{ duration: 0.8 }}
            animate={controls}
            {...props.fillerBarProps}
            fillerBarRef={ref}
          />
        </OuterBar>
      </PercentageContainer>
    </SkillContainer>
  );
};

export default ProgressBar;
