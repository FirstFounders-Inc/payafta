import Signin from '@assets/svg/signin.svg?react';
import AuthLayout from '@components/Layout/AuthLayout';
import ControlledInput from '@components/shared/Input/ControlledInput';
import { useForm } from 'react-hook-form';
import EyeClosed from '@assets/icons/eyeClosed.svg?react';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const { control } = useForm();
  return (
    <main className="lg:flex lg:min-h-screen  ">
      <article className="flex justify-center rounded-lg bg-white ">
        <section className="hidden lg:relative lg:flex  h-full lg:flex-[60%] flex-col justify-between ">
          <Signin />
        </section>
        <section className="flex lg:flex-[40%] flex-col items-center justify-between  px-4 py-4  ">
          <AuthLayout
            bigText="Sign in"
            smallParagraph="Enter your account details"
            smallText="You don’t have an account?"
            linkText="Create an account"
            linkTo="/signup"
            buttonText="Sign in"
            className="lg:justify-center lg:items-center"
          >
            <ControlledInput
              label="Email"
              type="email"
              name="email"
              control={control}
            />
            <ControlledInput
              label="Password"
              type="password"
              name="password"
              control={control}
              endAdornment={<EyeClosed />}
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
          </AuthLayout>
          {/* <div className="grid h-full place-content-center"></div> */}
        </section>
      </article>
    </main>
  );
};

export default Login;
