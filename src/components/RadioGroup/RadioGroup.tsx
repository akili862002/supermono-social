import { useField } from "formik";
import React, { ReactNode } from "react";
import FormControl, { IFormControlProps } from "../FormControl/FormControl";
import * as Styled from "./RadioGroup.styles";

export interface IBaseGroupRadioProps<T> extends IFormControlProps {
  className?: string;
  options: T[];
  renderOption: (args: {
    option: T;
    active: boolean;
    checked: boolean;
  }) => ReactNode;
}

export const BaseRadioGroup = <T,>({
  className,
  options,
  renderOption,
  ...formControlProps
}: IBaseGroupRadioProps<T>) => {
  const [field, meta, helper] = useField(formControlProps.name);

  return (
    <FormControl {...formControlProps}>
      <Styled.RadioGroup
        onChange={(val) => helper.setValue(val)}
        value={field.value}
      >
        {options.map((option, index) => (
          <Styled.RadioGroupOption key={index} value={option}>
            {({ active, checked }) => (
              <>
                <input checked={checked} type="radio" />
                {renderOption({ option, active, checked })}
              </>
            )}
          </Styled.RadioGroupOption>
        ))}
      </Styled.RadioGroup>
    </FormControl>
  );
};
