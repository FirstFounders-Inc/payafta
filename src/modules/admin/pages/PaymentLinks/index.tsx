import Table from '@components/shared/Table';
import { paymentLinkData } from 'db/paymentLinks';
import { ITableHead } from '@components/shared/Table';
import { twMerge } from 'tailwind-merge';

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
    label: 'Type',
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
          case 'agreement':
            return 'bg-[#E8FDEF] text-[#12BA4A]';
          case 'payment':
            return 'bg-[#E9F5FB] text-[#1F7EAD]';
          case 'shipping':
            return 'bg-[#E6E7FE]  text-[#03045B] ';
          case 'closed':
            return 'bg-[#F2F2F2] text-[#333]';
          case 'delivery':
            return 'bg-[#E6E7FE] text-[#03045B]';
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

const PaymentLinks = () => {
  return (
    <div>
      <Table body={paymentLinkData} heads={head} showView />
    </div>
  );
};

export default PaymentLinks;
