export type IRecentTransactionsAndPayment = {
    title: string;
    link: string;
    onClick: () => void;
} 

const RecentTransactionsAndPayment = (props: IRecentTransactionsAndPayment) => {
  const {title, link} = props;
  return (
    <div className="bg-[#fff] rounded-[8px] border-[1px] border-[#f2f2f2] h-[526px] shadow-sm p-4 ">
      <div className="flex justify-between ">
        <p className="text-[15px] font-medium leading-[22px] text-[#333333]">
          {title}
        </p>
        <p className="text-[#6B6DFA] text-[12px] leading-[15px] font-bold uppercase">
          {link}
        </p>
      </div>
      <div className="border rounded-[8px] shadow-sm">
        <div className="flex justify-between">
          <p>Full Name</p>
          <p>10000</p>
        </div>
        <div className="flex justify-between">
          <p>Full Name</p>
          <p>10000</p>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactionsAndPayment