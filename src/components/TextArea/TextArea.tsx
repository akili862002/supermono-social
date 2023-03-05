import React from "react";
import { useField } from "formik";
import FormControl, { IFormControlProps } from "../FormControl/FormControl";
import * as Styled from "./TextArea.styles";

type ITextAreaProps = IFormControlProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<ITextAreaProps> = ({ name, ...rest }) => {
  const [field, meta, helper] = useField(name);

  return (
    <FormControl name={name} required={rest.required} label={rest.label}>
      <Styled.TextArea {...field} {...rest} />
    </FormControl>
  );
};

export default TextArea;
