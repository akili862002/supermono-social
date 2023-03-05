import { useField } from "formik";
import { PropsWithChildren } from "react";
import FormControl, { IFormControlProps } from "../FormControl/FormControl";
import { CloseIcon } from "./Tag.icons";
import * as Styled from "./TagPicker.styles";

interface ITagPickerProps<T> extends IFormControlProps {
  options: T[];
  isEqual: (a: T, b: T) => boolean;
  renderOption: (option: T) => React.ReactNode;
}

const TagPicker = <T,>({
  options,
  renderOption,
  isEqual,
  ...formControlProps
}: ITagPickerProps<T>) => {
  const [field, meta, helper] = useField(formControlProps.name);

  const selectedOptions = field.value as T[];
  const unselectedOptions = options.filter(
    (option) =>
      !selectedOptions.some((selectedOption) => isEqual(option, selectedOption))
  );

  return (
    <FormControl {...formControlProps}>
      <Styled.TagPickerContainer>
        <Styled.OptionsContainer>
          {selectedOptions.map((option, index) => (
            <Option
              selected={true}
              onDeselect={() => {
                helper.setValue(
                  selectedOptions.filter(
                    (selectedOption) => !isEqual(selectedOption, option)
                  )
                );
              }}
              key={index}
            >
              {renderOption(option)}
            </Option>
          ))}
        </Styled.OptionsContainer>
        <Styled.OptionsContainer>
          {unselectedOptions.map((option, index) => (
            <Option
              selected={false}
              key={index}
              onClick={() => {
                helper.setValue([...selectedOptions, option]);
              }}
            >
              {renderOption(option)}
            </Option>
          ))}
        </Styled.OptionsContainer>
      </Styled.TagPickerContainer>
    </FormControl>
  );
};

export default TagPicker;

const Option: React.FC<
  PropsWithChildren<
    | {
        selected: false;
        onClick: () => void;
        readonly onDeselect?: undefined;
      }
    | {
        selected: true;
        onDeselect: () => void;
        readonly onClick?: undefined;
      }
  >
> = ({ children, selected, onClick, onDeselect }) => {
  return (
    <Styled.Option selected={selected} onClick={onClick}>
      {children}
      {selected && (
        <Styled.DeselectButton role="button" onClick={onDeselect}>
          <CloseIcon />
        </Styled.DeselectButton>
      )}
    </Styled.Option>
  );
};
