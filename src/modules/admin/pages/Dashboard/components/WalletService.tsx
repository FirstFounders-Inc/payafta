import { walletServices } from 'db/dashboard';

const WalletService = () => {
  return (
    <div className="mt-6 p-4 bg-[#fff] rounded-[8px] border-[1px] border-[#f2f2f2] shadow-sm lg:h-[172px]">
      <p>Wallet services</p>
      <div className="grid  md:grid-cols-3 ">
        {walletServices.map(({ Icon, service, id }) => {
          return (
            <div
              key={service}
              className={`${
                id === 3
                  ? 'border-[0px]'
                  : ' border-b-[1px] lg:border-r-[1px] border-[#f2f2f2]'
              } p-6  `}
            >
              <Icon />
              <h3 className="pt-4 text-[18px] font-medium leading-5">
                {service}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WalletService;
