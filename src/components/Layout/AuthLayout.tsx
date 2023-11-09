import { ReactNode } from 'react';
import Logo from '@assets/svg/Logo.svg?react';
import Button from '@components/shared/Button';
import { Link, To } from 'react-router-dom';
import { Checkbox } from '@mui/material';

type Props = {
  children: ReactNode;
  bigText: string;
  smallText: string;
  smallParagraph?: string;
  buttonText: string;
  linkTo: To;
  linkText?: string;
  checkboxText?: string;
  link?: string;
  checkbox?: boolean;
};

const AuthLayout = ({
  children,
  buttonText,
  bigText,
  smallText,
  linkTo,
  linkText,
  checkboxText,
  checkbox,

  smallParagraph,
}: Props) => {
  return (
    <section className=" p-4 lg:p-20 flex flex-col ">
      <div>
        <Logo />
        <h3 className="pt-14 font-bold text-[24px] leading-7 text-[#1A1A1A]">
          {bigText}
        </h3>
        {smallParagraph && (
          <p className="text-[14px] font-normal leading-4 text-[#666666] pt-[5px]">
            {smallParagraph}
          </p>
        )}
      </div>
      {children}
      {checkbox && checkboxText && (
        <div className="flex ">
          <Checkbox />
          <p className="text-[12px]  font-medium leading-4 text-[#666666] pt-2 lg:w-[472px]">
            {checkboxText}
          </p>
        </div>
      )}

      <Button className="rounded-[48px] p-[14px] bg-[#03045B] text-[#fff]  ">
        {buttonText}
      </Button>
      {smallText && linkTo && linkText && (
        <div className="flex  pt-2">
          <p className="text-[14px] font-normal leading-4 text-[#666666] pt-[5px]">
            {smallText}
          </p>

          <Link to={linkTo} className="pl-2 font-semibold">
            {linkText}
          </Link>
        </div>
      )}
    </section>
  );
};

export default AuthLayout;
