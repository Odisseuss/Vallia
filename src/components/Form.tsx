import * as React from "react";
import styled from "styled-components";
import BigText from "./BigText";
import CustomContainer from "./CustomContainer";
import Paragraph from "./Paragraph";
import { animations, colors } from "../ThemeConfig";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useFormik } from "formik";
import PhilipImage from "../img/Phillip.jpg";
import Button from "./Button";

interface InputProps {
  readonly backgroundColor?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly padding?: string;
  readonly fontSize?: string;
  readonly width?: string;
  readonly color?: string;
  readonly height?: string;
  readonly margin?: string;
}
interface TextAreaProps {
  readonly backgroundColor?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly padding?: string;
  readonly fontSize?: string;
  readonly width?: string;
  readonly color?: string;
  readonly height?: string;
  readonly margin?: string;
}

let StyledInput = styled.input<InputProps>`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  border: ${(props) => props.border ?? "2px solid #666666"};
  border-radius: ${(props) => props.borderRadius ?? "7px"};
  padding: ${(props) => props.padding ?? "0 0 0 1rem"};
  font-size: ${(props) => props.fontSize ?? "1rem"};
  width: ${(props) => props.width ?? "100%"};
  color: ${(props) => props.color ?? colors.lightest_grey};
  height: ${(props) => props.height ?? "4rem"};
  margin: ${(props) => props.margin ?? "1rem 0"};
`;

let StyledTextArea = styled.textarea<TextAreaProps>`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  border: ${(props) => props.border ?? "2px solid #666666"};
  border-radius: ${(props) => props.borderRadius ?? "7px"};
  padding: ${(props) => props.padding ?? "0 0 0 1rem"};
  font-size: ${(props) => props.fontSize ?? "1rem"};
  width: ${(props) => props.width ?? "100%"};
  color: ${(props) => props.color ?? colors.lightest_grey};
  height: ${(props) => props.height ?? "4rem"};
  margin: ${(props) => props.margin ?? "1rem 0"};
`;
let StyledForm = styled.form`
  width: 100%;
  height: 100%;
`;

export interface FormProps {
  readonly values: FormValues;
  readonly inputProps?: InputProps;
  readonly textAreaProps?: TextAreaProps;
}
interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Form: React.FunctionComponent<FormProps> = (props) => {
  let initialValues: FormValues = props.values;
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInput
        {...props.inputProps}
        name="name"
        type="text"
        placeholder="Your name*"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <StyledInput
        {...props.inputProps}
        name="email"
        type="email"
        placeholder="Your email*"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <StyledInput
        {...props.inputProps}
        name="subject"
        type="text"
        placeholder="Subject*"
        onChange={formik.handleChange}
        value={formik.values.subject}
      />
      <StyledTextArea
        {...props.textAreaProps}
        name="message"
        placeholder="Message*"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <Button
        uppercase
        outline
        elementColor={colors.primary}
        whileHover={animations.button_outline_fill}
        block
        type="submit"
        margin="2rem 0 0 0"
      >
        Send
      </Button>
    </StyledForm>
  );
};

export default Form;
