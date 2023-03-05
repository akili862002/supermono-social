import { useField } from "formik";
import * as Styled from "./Checkbox.styles";

interface ICheckboxProps {
  name: string;
  label: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ name, label }) => {
  const [field, meta, helper] = useField(name);

  return (
    <Styled.CheckboxContainer>
      <Styled.CheckboxInput type="checkbox" {...field} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.CheckboxContainer>
  );
};

export default Checkbox;
