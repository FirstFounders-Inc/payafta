import Signin from '@assets/svg/signup.svg?react'
import AuthLayout from '@components/Layout/AuthLayout';

const Login = () => {
  
  return (
    <main className="flex min-h-screen  ">
      <article className="flex justify-center rounded-lg bg-white ">
        <section className="hidden lg:relative lg:flex  h-full flex-[60%] flex-col justify-between ">
          <Signin />
        </section>
        <section className="flex lg:flex-[40%] flex-col items-center justify-between rounded-lg rounded-l-none px-4 py-4  ">
          <AuthLayout
            bigText="Sign in"
            smallParagraph="Enter your account details"
            smallText="You don’t have an account?"
            linkText="Create an account"
            linkTo='/signup'
            checkbox={true}
            buttonText='Sign in'
            checkboxText='By continuing, you/re agreeing to our customer terms of service, privacy policy and cookie policy'

          >Hi</AuthLayout>
          {/* <div className="grid h-full place-content-center"></div> */}
        </section>
      </article>
    </main>
  );
};

export default Login;


