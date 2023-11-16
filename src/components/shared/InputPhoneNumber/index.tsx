import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/semantic-ui.css';
import FieldHelperText from '../FieldHelperText';
import { IInputPhoneNumberProps } from './interface';


import 'react-phone-number-input/style.css';

const InputPhoneNumber = ({
  label,
  onChange,

  error,
  helperText,
}: IInputPhoneNumberProps) => {
  return (
    <div className="w-full max-w-full overflow-hidden flex flex-col p-2">
      {label && <label>{label}</label>}
      <div className="relative">
        <PhoneInput
          country={'ng'}
          onChange={(phone: string) => onChange(`+${phone}`)}
          containerStyle={{
            width: '100%',
          }}
          inputStyle={{
            width: '100%',
            borderRadius: '8px',
            paddingTop: '26px',
            paddingBottom: '26px',
          }}
        />
      </div>

      <FieldHelperText error={error} helperText={helperText} />
    </div>
  );
};

export default InputPhoneNumber;
