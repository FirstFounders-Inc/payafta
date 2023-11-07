import rightAccordion from '@assets/icons/rightAccordion.svg';
import desktop from '@assets/svg/desktop.svg';

const safePaymentObj = [
  {
    smallText: 'Best escrow payment in Nigeria',
    bigText: 'The Safest Way to Pay',
    paragraph:
      'We offer you the safest way to pay for your online purchases. With Payafta, your money is held securely until you receive your goods or services as promised. Trust is at the core of what we do, and your peace of mind is our priority.',
    button: 'Get Started',
  },
];

const SafePayment = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2  mt-[68px] md:mt-[86px]">
      <div className="md:flex-1">
        {safePaymentObj?.map((el, idx) => {
          return (
            <div key={idx} className="">
              <p className=" rounded-[16px] md:rounded-[24px] bg-[#86C8E9] p-2 w-[272px] text-[#fff] uppercase  text-[14px] font-600">
                {el?.smallText}
              </p>
              <h1 className=" text-[52px] md:text-[80px] font-normal text-[#03045B] w-[351px] md:w-[539px]  leading-[65px] md:leading-[100px] uppercase mb-[10px]">
                {el?.bigText}
              </h1>
              <p className="text-[#333333] text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] font-medium w-[350px] md:w-[649px] mb-[24px]">
                {el?.paragraph}
              </p>
              <button className="flex gap-2  rounded-[31px] md:rounded-[48px] bg-[#03045B]  p-4 md:p-6">
                <p className="text-[#fff]">{el?.button}</p>
                <img src={rightAccordion} alt="an accordion" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-16 md:mt-0">
        <img src={desktop} alt="desktop screen" />
      </div>
    </div>
  );
};

export default SafePayment;
