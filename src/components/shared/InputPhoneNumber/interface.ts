export type IInputPhoneNumberProps = {
  label: string;
  name: string;
  value: string;
  onChange: (data: string) => void;
  error: boolean | undefined;
  helperText: string | undefined;
};
