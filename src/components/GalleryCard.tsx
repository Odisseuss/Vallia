import * as React from "react";
import styled from "styled-components";
import { animations, colors } from "../ThemeConfig";
import BigText from "./BigText";
import CustomContainer from "./CustomContainer";
import Paragraph from "./Paragraph";

let StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
interface GalleryCardProps {
  readonly description: string;
  readonly title: string;
  readonly image: string;
  readonly titleSlideIn?: boolean;
}
const slashMotion = {
  hidden: { x: "-100%", transition: { duration: 0.2, ease: "easeOut" } },
  visible: { x: "0", transition: { duration: 0.3, ease: "easeIn" } },
};
const GalleryCard: React.FunctionComponent<GalleryCardProps> = (props) => {
  if (props.titleSlideIn) {
    return (
      <CustomContainer
        flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        margin={"1rem 0"}
        style={{ cursor: "pointer" }}
      >
        <CustomContainer whileHover="visible" initial="hidden">
          <CustomContainer
            backgroundColor={"#0A192F"}
            borderRadius={"5px"}
            width={"95%"}
            padding={"0.5rem 0 0.5rem 3rem"}
            style={{ position: "absolute", bottom: "10%", left: "-3%" }}
            variants={slashMotion}
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
        <StyledImage src={props.image} />
      </CustomContainer>
    );
  }
};

export default GalleryCard;
