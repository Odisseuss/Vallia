import * as React from "react";
import styled from "styled-components";
import { animations, colors } from "../ThemeConfig";
import BigText from "./BigText";
import CustomContainer from "./CustomContainer";
import Paragraph from "./Paragraph";

let StyledImage = styled.img`
  height: 600px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
interface TeamCardProps {
  readonly description: string;
  readonly title: string;
  readonly image: string;
  readonly titleInset?: boolean;
}

const TeamCard: React.FunctionComponent<TeamCardProps> = (props) => {
  if (props.titleInset) {
    return (
      <CustomContainer
        flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        height={"100%"}
        margin={"1rem 0"}
      >
        <CustomContainer height={"100%"}>
          <CustomContainer
            backgroundColor={"#0A192F"}
            borderRadius={"5px"}
            width={"80%"}
            padding={"0.5rem 0 0.5rem 3rem"}
            style={{ position: "absolute", bottom: "5%", left: "-3%" }}
          >
            <BigText
              fontSize={"1.4rem"}
              lineHeight={"1.4rem"}
              elementColor={colors.lightest_grey}
              margin={"0 0 1rem 0"}
            >
              {props.title}
            </BigText>
            <Paragraph
              fontSize={"1.2rem"}
              lineHeight={"1.2rem"}
              width={"100%"}
              margin={"1rem 0 0 0"}
            >
              {props.description}
            </Paragraph>
          </CustomContainer>

          <StyledImage src={props.image} />
        </CustomContainer>
      </CustomContainer>
    );
  } else {
    return (
      <CustomContainer
        flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        whileHover={animations.move_up_small_distance}
        style={{ cursor: "pointer" }}
      >
        <StyledImage src={props.image} />
        <Paragraph
          fontSize={"1.2rem"}
          lineHeight={"1.2rem"}
          width={"100%"}
          margin={"1rem 0 0 0"}
        >
          {props.description}
        </Paragraph>
        <BigText
          fontSize={"1.4rem"}
          lineHeight={"1.4rem"}
          elementColor={colors.lightest_grey}
          margin={"0 0 1rem 0"}
        >
          {props.title}
        </BigText>
      </CustomContainer>
    );
  }
};

export default TeamCard;
