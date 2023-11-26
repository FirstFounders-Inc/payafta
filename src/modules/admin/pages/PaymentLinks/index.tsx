import Table, { ITableHead } from '@components/shared/Table';
import { twMerge } from 'tailwind-merge';

const body = [
  {
    date: 'Nov 23',
    name: 'ahmed',
    type: 'buyer',
    amount: 300,
    status: 'closed',
    action: 'view',
  },
];

const head: ITableHead[] = [
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
  },
  {
    accessor: 'amount',
    label: 'Amount',
  },
  {
    accessor: 'status',
    label: 'Staus',
    render: (status: string) => {
      const className = (() => {
        switch (status) {
          case 'agreement':
            return 'bg-green-400 text-green-300';
          case 'payment':
            return 'bg-orange-400 text-orange-300';
          default:
            return 'text-red-400 bg-red-600';
        }
      })();
      return <div className={twMerge('border', className)}>{status}</div>;
    },
  },
  {
    accessor: 'action',
    label: 'Action',
    render: () => 'View',
  },
];

const PaymentLinks = () => {
  return (
    <div>
      <Table body={body} heads={head} />
    </div>
  );
};

export default PaymentLinks;
