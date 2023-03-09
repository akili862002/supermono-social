import { useField } from "formik";
import FormControl from "../FormControl/FormControl";
import * as Styled from "./TextField.styles";

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required: boolean;
  placeholder: string;
}

const TextField: React.FC<ITextFieldProps> = (props) => {
  const [field] = useField(props.name);

  return (
    <FormControl name={props.name} required>
      <Styled.Input value={field.value} {...field} {...props} />
    </FormControl>
  );
};

export default TextField;
