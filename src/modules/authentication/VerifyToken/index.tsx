import SignupImage from '@assets/svg/signup.svg?react';

import AuthLayout from '@components/Layout/AuthLayout';
import Button from '@components/shared/Button';
import ControlledInput from '@components/shared/Input/ControlledInput';

import { useForm } from 'react-hook-form';

const VerifyToken = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      token: ['', '', '', ''],
    },
  });
  // const[open, setOpen] = useState(false)
  // const handleClose = () => {
  //   setOpen(false)
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onForm = (data: any) => {
    console.log(data);
    const payload = [...data.token];
    console.log(payload.join(''));
   
  };
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
            <form onSubmit={handleSubmit(onForm)}>
              <div className="flex w-full max-w-[360px] gap-[10px]">
                {Array.from({ length: 4 }).map((_digit, idx) => (
                  <ControlledInput
                    key={idx}
                    type="text"
                    name={`token.${idx}`}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    control={control}
                    //   pattern="\d{1}"

                    // maxLength={valueLength}
                    // value={digit}

                    className="w-full h-[40px] border-[1px] rounded-[5px] text-center font-bold text-[32px] leading-3"
                    //   {...register(`token.${idx}`)}
                  />
                ))}
              </div>
              <p className="text-[12px] leading-4 text-[#4D4D4D] text-center pt-2">
                Resend code in
              </p>
              <Button
                className="rounded-[48px] p-[14px] bg-[#03045B] text-[#fff]  mt-8 w-full"
                type="submit"
              >
                Verify
              </Button>
            </form>
          </AuthLayout>
        </div>
      </div>
      {/* <Modal onClose={handleClose} open={open}>
        chidren
        <button>close</button>
      </Modal> */}
    </div>
  );
};

export default VerifyToken;
