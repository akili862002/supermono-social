import { useField } from "formik";
import { useState } from "react";
import * as Styled from "./TitleInput.styles";

interface ITitleInputProps {
  name: string;
  required: boolean;
  defaultValue: string;
}

const TitleInput: React.FC<ITitleInputProps> = ({ name, defaultValue }) => {
  const [field, meta, helper] = useField(name);
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return (
      <Styled.Input
        autoFocus
        {...field}
        onBlur={(e) => {
          setIsEdit(false);
          if (!field.value) helper.setValue(defaultValue);
          field.onBlur(e);
        }}
      />
    );
  }

  return (
    <Styled.TitleInputContainer
      onClick={() => {
        setIsEdit(true);
        console.log("Edit");
      }}
    >
      {field.value}
    </Styled.TitleInputContainer>
  );
};

export default TitleInput;
