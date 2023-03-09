import { useField } from "formik";
import { memo, PropsWithChildren } from "react";
import * as Styled from "./FormControl.styles";

export interface IFormControlProps {
  label?: string;
  required: boolean;
  name: string;
  desc?: string;
}

const FormControl: React.FC<PropsWithChildren<IFormControlProps>> = ({
  children,
  required,
  name,
  label,
  desc,
}) => {
  const [field, meta] = useField(name);

  return (
    <Styled.FormControlContainer>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Description>{desc}</Styled.Description>
      {children}
      {meta.touched && meta.error ? (
        <Styled.Helper>{meta.error}</Styled.Helper>
      ) : null}
    </Styled.FormControlContainer>
  );
};

export default memo(FormControl);
