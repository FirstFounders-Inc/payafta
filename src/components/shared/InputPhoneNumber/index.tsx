import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/semantic-ui.css';
import FieldHelperText from '../FieldHelperText';
import { IInputPhoneNumberProps } from './interface';

const InputPhoneNumber = ({
  label,

  value,
  onChange,
  error,
  helperText,
}: IInputPhoneNumberProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <PhoneInput
        country={'ng'}
        onChange={(phone: string) => onChange(phone)}
        value={value}
        containerClass="bg-red-600"
      />
      <FieldHelperText error={error} helperText={helperText} />
    </div>
  );
};

export default InputPhoneNumber;
