import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/semantic-ui.css';
import FieldHelperText from '../FieldHelperText';
import { IInputPhoneNumberProps } from './interface';
import { twMerge } from 'tailwind-merge';

const InputPhoneNumber = ({
  label,
  onChange,
  className,
  error,
  helperText,
}: IInputPhoneNumberProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <PhoneInput
        country={'ng'}
        onChange={(phone: string) => onChange(`+${phone}`)}
        containerClass={twMerge(className, '')}
      />
      <FieldHelperText error={error} helperText={helperText} />
    </div>
  );
};

export default InputPhoneNumber;
