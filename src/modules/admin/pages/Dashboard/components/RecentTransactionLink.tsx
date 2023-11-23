import TransactionEmptyState from '@assets/icons/transactionEmptyState.svg?react';

const RecentTransactionLink = () => {
  return (
    <div className="bg-[#fff] rounded-[8px] border-[1px] border-[#f2f2f2] h-[526px] shadow-sm p-4 ">
      <div className="flex justify-between ">
        <p className="text-[15px] font-medium leading-[22px] text-[#333333]">
          Recent Transactions
        </p>
        <p className="text-[#6B6DFA] text-[12px] leading-[15px] font-bold uppercase">
          view all
        </p>
      </div>
      <div className="flex items-center justify-center  pt-28">
        <TransactionEmptyState />
      </div>
    </div>
  );
};

export default RecentTransactionLink;
