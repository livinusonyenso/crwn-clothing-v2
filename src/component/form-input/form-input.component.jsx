import { FormInputLabel, Input, Group } from "./form-input.syle";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}{" "}
    </Group>
  );
};
export default FormInput;
