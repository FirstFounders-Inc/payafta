import SignupImage from '@assets/svg/signup.svg?react';
import AuthLayout from '@components/Layout/AuthLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginInput } from '@interfaces/auth.interface';
import { loginSchema } from '../validation/authValidation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ControlledInput from '@components/shared/Input/ControlledInput';
import EyeOpen from '@assets/icons/eyeOpen.svg?react';
import EyeClosed from '@assets/icons/eyeClosed.svg?react';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@components/shared/Button';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handle(data: ILoginInput) {
    console.log(data);
  }
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row w-full justify-center">
        <div className="hidden lg:flex lg:flex-[60%] ">
          <SignupImage />
        </div>
        <div className="  flex  flex-col lg:flex-[40%]   px-4 ">
         
            <AuthLayout
              bigText="Sign in"
              smallParagraph="Enter your account details"
              smallText="You don’t have an account?"
              linkText="Create an account"
              linkTo="/signup"
              className="lg:justify-center lg:items-center"
            >
              <form onSubmit={handleSubmit(handle, err => console.log(err))} >
                <ControlledInput
                  label="Email"
                  type="email"
                  name="email"
                  control={control}
                />
                <ControlledInput
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  control={control}
                  endAdornment={
                    showPassword ? (
                      <EyeOpen onClick={handleShowPassword} />
                    ) : (
                      <EyeClosed onClick={handleShowPassword} />
                    )
                  }
                />
                <div className="flex justify-between items-center">
                  <div className="flex ">
                    <Checkbox />
                    <p className="text-[12px]  font-medium leading-4 text-[#666666] pt-[12px] lg:w-[472px]">
                      Remember me
                    </p>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-[12px] whitespace-nowrap text-[#03045B] font-medium"
                  >
                    Recover password?
                  </Link>
                </div>
                <Button
                  className="rounded-[48px] p-[14px] bg-[#03045B] text-[#fff]  mt-8 w-full"
                  type="submit"
                >
                  Sign in
                </Button>
              </form>
            </AuthLayout>
         
        </div>
      </div>
    </div>
  );
};

export default Signup;
