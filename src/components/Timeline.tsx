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
import { colors } from "../ThemeConfig";
import Paragraph from "./Paragraph";
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
    <div>
      <h1>Timeline</h1>
      <VerticalTimeline>
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
                background: "#64FF8F",
                boxShadow:
                  "0 0 0 4px #E6E6E6, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              icon={isDesktopIcon ? <DesktopIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{el.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {el.location}
              </h5>
              <Paragraph>{el.description}</Paragraph>
              <Button
                padding="0.25rem 1rem"
                borderRadius="5px"
                fontColor={colors.navy_blue}
              >
                Contact Me
              </Button>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
