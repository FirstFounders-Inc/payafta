import buyerProtection from '@assets/svg/buyerProtection.svg';

const BuyerProtection = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-center gap-2 pt-5">
      <div className=" flex-1">
        <img src={buyerProtection} alt="a happy lady" />
      </div>
      <div className="">
        <h1 className="lg:w-[624px]  font-normal  text-[52px] lg:text-[64px]  leading-[65px] lg:leading-[80px] text-[#03045B] font-[Millik]">
          Buyer Protection with Payafta
        </h1>
        <p className="text-[20px] leading-[25px] text-[#333333] font-medium lg:w-[624px] pt-4">
          Payafta takes buyer protection seriously. We're here to ensure that
          you receive what you paid for. Our process guarantees that your money
          is held securely until you confirm your satisfaction. If you encounter
          any issues with your purchase, our team is ready to assist and, if
          necessary, facilitate refunds. Your peace of mind is our top priority.
        </p>
      </div>
    </div>
  );
};

export default BuyerProtection;
