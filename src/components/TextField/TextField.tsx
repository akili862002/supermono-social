import { useField } from "formik";
import { useState } from "react";
import * as Styled from "./TextField.styles";

interface ITextFieldProps {
  name: string;
  required: boolean;
  placeholder: string;
}

const TextField: React.FC<ITextFieldProps> = (props) => {
  const [field, meta, helper] = useField(props.name);

  return (
    <Styled.Input
      value={field.value}
      onChange={(e) => helper.setValue(e.target.value)}
      {...props}
    />
  );
};

export default TextField;
