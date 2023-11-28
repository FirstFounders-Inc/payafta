import { ReactNode } from 'react';

const head = ['Date', 'Name', 'Type', 'Amount', 'Status', 'Action'];
console.log(head);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IJSON = { [key: string | number]: any };
// type AnyValue = string | number |
export type ITableHead = {
  label: ReactNode;
  accessor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (val: any, rowData: any) => ReactNode;
  align?: 'left' | 'center' | 'right';
};

type ITableBody = IJSON;

type ITableProps = {
  heads: ITableHead[];
  body: ITableBody[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMenuClick?: (rowData: any) => void;
  showView?: boolean;
  
};

const Table = ({ heads, body, showView}: ITableProps) => {
  return (
    <table className="w-full bg-[#fff]">
      <thead>
        {heads.map(({ label, accessor, align }) => {
          return (
            <th
              className={`shadow-sm bg-[#F8F8F8] p-4 font-medium h-[48px] border-r-[1px] last:border-r-0`}
              align={align || 'left'}
              key={accessor}
            >
              {label}
            </th>
          );
        })}
        {showView && (
          <th
            className="shadow-sm bg-[#F8F8F8] p-4 font-medium h-[48px]"
            
          >
            View
          </th>
        )}
      </thead>
      <tbody>
        {body.map((data, idx) => {
          return (
            <tr key={idx} className="border-b-[1px] ">
              {heads.map(({ accessor, align, render }) => {
                return (
                  <td align={align || 'left'} key={accessor} className="p-4">
                    {render ? render(data[accessor], data) : data[accessor]}
                  </td>
                );
              })}
              {showView && <td className='text-center'>View</td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
