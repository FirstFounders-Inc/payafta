import { useState } from 'react';
import SignupImage from '@assets/svg/signup.svg?react';
import OtpInput from './components/OtpInput';
import AuthLayout from '@components/Layout/AuthLayout';
import Button from '@components/shared/Button';

const VerifyToken = () => {
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row w-full md:items-center md:justify-center">
        <div className="hidden lg:flex lg:flex-[60%] ">
          <SignupImage className="w-full object-cover" />
        </div>
        <div className="flex flex-col  lg:flex-[40%] lg:pt-8  px-4 lg:px-0 ">
          <AuthLayout
            bigText="Verification"
            smallText="Enter the 4 digit sent to +2347011223344."
          >
            <p className="text-[16px] leading-[22px] text-[#333333] pt-8 pb-2">
              Enter Verification Code{' '}
            </p>
            <OtpInput value={otp} valueLength={4} onChange={onChange} />
            <p className="text-[12px] leading-4 text-[#4D4D4D] text-center pt-2">
              Resend code in
            </p>
            <Button
              className="rounded-[48px] p-[14px] bg-[#03045B] text-[#fff]  mt-8 w-full"
              type="submit"
            >
              Verify
            </Button>
          </AuthLayout>
        </div>
      </div>
    </div>
  );
};

export default VerifyToken;
