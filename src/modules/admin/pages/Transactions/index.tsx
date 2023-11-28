import Table, { ITableHead } from '@components/shared/Table';
import { twMerge } from 'tailwind-merge';
import TransactionEmptyImage from '@assets/icons/transactionEmptyState.svg?react';

const transactionData = [
  {
    date: '12/12/2022',
    name: 'John Doe',
    type: 'Payment',
    amount: 1200,
    status: 'successful',
  },
  {
    date: '12/12/2022',
    name: 'John Doe',
    type: 'Payment',
    amount: 1200,
    status: 'successful',
  },
  {
    date: '12/12/2022',
    name: 'John Doe',
    type: 'Payment',
    amount: 1200,
    status: 'successful',
  },
];

export const head: ITableHead[] = [
  {
    accessor: 'date',
    label: ' Date',
    render: (date: string) => date,
  },
  {
    accessor: 'name',
    label: 'Name',
  },
  {
    accessor: 'type',
    label: 'Payment Type',
    align: 'center',
  },
  {
    accessor: 'amount',
    label: 'Amount(₦)',
    align: 'center',
  },
  {
    accessor: 'status',
    label: 'Status',

    render: (status: string) => {
      const className = (() => {
        switch (status) {
          case 'successful':
            return 'bg-[#E8FDEF] text-[#12BA4A]';

          default:
            return 'text-red-400 bg-red-600';
        }
      })();
      return (
        <div
          className={twMerge(
            ' text-[14px] rounded-[20px] leading-[17px] font-[500] text-center capitalize py-[12px]  ',
            className,
          )}
        >
          {status}
        </div>
      );
    },
  },
];

const Transactions = () => {
  return (
    <div>
      <Table
        body={transactionData}
        heads={head}
        emptyStateImage={<TransactionEmptyImage />}
      />
    </div>
  );
};

export default Transactions;
