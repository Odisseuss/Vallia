import * as React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ReactComponent as DesktopIcon } from "../svg/Desktop.svg";
import { ReactComponent as SchoolIcon } from "../svg/School.svg";
import "react-vertical-timeline-component/style.min.css";
import Button from "./Button";
import { animations, colors } from "../ThemeConfig";
import Paragraph from "./Paragraph";
import BigText from "./BigText";
import Container from "react-bootstrap/Container";
import styles from "./Timeline.module.css";
let timelineElements = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Dragontail, Ascana",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: "work",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Skystead, Craonia",
    description:
      "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
    buttonText: "View Backend Projects",
    date: "June 2013 - August 2016",
    icon: "work",
  },
  {
    id: 3,
    title: "Quality Assurance Engineer",
    location: "South Warren, Geshington",
    description:
      "Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
    buttonText: "Company Website",
    date: "September 2011 - June 2013",
    icon: "work",
  },
  {
    id: 4,
    title: "Oak Ridge College",
    location: "South Warren, Geshington",
    description:
      "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    buttonText: "Course Certificate",
    date: "September 2011",
    icon: "school",
  },
  {
    id: 5,
    title: "Hawking College",
    location: "Skystead, Craonia",
    description:
      "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    buttonText: "College Projects",
    date: "2007 - 2011",
    icon: "school",
  },
  {
    id: 6,
    title: "Marble Hills Grammar School",
    location: "Dragontail, Ascana",
    description:
      "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    date: "2003 - 2007",
    icon: "school",
  },
];

export interface TimelineProps {}

const Timeline: React.FunctionComponent<TimelineProps> = () => {
  return (
    <Container className="my-5">
      <BigText
        fontSize={"4rem"}
        elementColor={"#E6E6E6"}
        fontWeight={"800"}
        textAlign={"center"}
      >
        Timeline
      </BigText>
      <VerticalTimeline className={styles.different_color_timeline_bar}>
        {timelineElements.map((el) => {
          let isDesktopIcon = el.icon === "work";
          let showButton =
            el.buttonText !== undefined &&
            el.buttonText !== null &&
            el.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={el.id}
              date={el.date}
              contentStyle={{ backgroundColor: "#172A45", color: "#E6E6E6" }}
              iconStyle={{
                background: colors.primary,
                boxShadow:
                  "0 0 0 4px #E6E6E6, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              icon={isDesktopIcon ? <DesktopIcon /> : <SchoolIcon />}
            >
              <BigText
                fontSize={"1.2rem"}
                elementColor={"#E6E6E6"}
                lineHeight={"1.4rem"}
              >
                {el.title}
              </BigText>

              <BigText
                fontSize={"1rem"}
                elementColor={"#E6E6E6"}
                lineHeight={"1.2rem"}
                fontWeight={"400"}
              >
                {el.location}
              </BigText>
              <Paragraph width="100%" margin="1.5rem 0 !important">
                {el.description}
              </Paragraph>
              <Button
                outline
                padding="0.25rem 1rem"
                borderRadius="5px"
                fontColor={colors.primary}
                whileHover={animations.button_outline_fill}
                block
              >
                Contact Me
              </Button>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Container>
  );
};

export default Timeline;
