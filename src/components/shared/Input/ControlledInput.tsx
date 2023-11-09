import { Controller, FieldValues } from 'react-hook-form'
import { IControlledInputProps } from './interface'
import Input from '.'


const ControlledInput = <TFieldValue extends FieldValues>(
  props: IControlledInputProps<TFieldValue>,
) => {
  const { name, control, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ...fields }, fieldState }) => (
        <Input
          {...rest}
          {...fields}
          error={(fieldState.error?.message || '').length > 0}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledInput