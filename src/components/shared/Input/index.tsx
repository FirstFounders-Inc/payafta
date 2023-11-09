import { InputAdornment, OutlinedInput } from '@mui/material';
import { IInputProps } from './interface';
import { twMerge } from 'tailwind-merge';
import FieldHelperText from '../FieldHelperText';

const Input = (props: IInputProps) => {
  const {
    label,

    helperText,
    startAdornmentProps,
    endAdornmentProps,

    className,
    startAdornment,
    endAdornment,
    ...rest
  } = props;
  return (
    <div className="w-full max-w-full overflow-hidden">
      {label && <label>{label}</label>}
      <OutlinedInput
        {...rest}
        classes={{ input: twMerge('w-full !text-[12px]', className) }}
        startAdornment={
          startAdornment ? (
            <InputAdornment {...startAdornmentProps} position="start">
              {startAdornment}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endAdornment ? (
            <InputAdornment {...endAdornmentProps} position="end">
              {endAdornment}
            </InputAdornment>
          ) : null
        }
      />
      <FieldHelperText error={props.error} helperText={helperText} />
    </div>
  );
};

export default Input;
