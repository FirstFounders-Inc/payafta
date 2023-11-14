import InputPhoneNumber from '.';
import { Controller, FieldValues } from 'react-hook-form';
import { IControlledInputProps } from '../Input/interface';

const ControlledPhoneNumberInput = <TFieldValue extends FieldValues>(
  props: IControlledInputProps<TFieldValue>,
) => {
  const { name, control, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ...fields }, fieldState }) => (
        <InputPhoneNumber
          {...rest}
          {...fields}
          //   onChange={value => {
          //    const e = {
          //       name: name,
          //       value: value,
          //     };
          //     onChange(e);
          //   }}
          onChange={onChange}
          error={(fieldState.error?.message || '').length > 0}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledPhoneNumberInput;
