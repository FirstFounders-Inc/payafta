import { InputAdornmentProps, OutlinedInputProps } from '@mui/material';
import { IFieldHelperTextProps } from '../FieldHelperText/interface';
import { Control, FieldErrorsImpl, FieldValues, Path } from 'react-hook-form';
// import { FieldValues } from 'react-hook-form';

type IInputAdornmentProps = Omit<InputAdornmentProps, 'position'>;

export interface IBaseControlledField<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control?: Control<TFieldValues>;
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
}

export type IInputProps = Omit<OutlinedInputProps, 'type'> &
  IFieldHelperTextProps & {
    label: string;

    startAdornmentProps?: IInputAdornmentProps;
    endAdornmentProps?: IInputAdornmentProps;
  };

export type IControlledInputProps<TFieldValues extends FieldValues> = Omit<
  IInputProps,
  'value' | 'name'
> &
  IBaseControlledField<TFieldValues> & {
    name: string;
    type?: 'text' | 'number' | 'password' | 'email';
  };
