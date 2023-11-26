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
};

const Table = ({ heads, body }: ITableProps) => {
  return (
    <table className="w-full bg-[#fff]">
      <thead>
        {heads.map(({ label, accessor, align }) => {
          return (
            <th
              className="bg-[#F8F8F8]  font-medium/"
              align={align || 'left'}
              key={accessor}
            >
              {label}
            </th>
          );
        })}
      </thead>
      <tbody>
        {body.map((data, idx) => {
          return (
            <tr key={idx}>
              {heads.map(({ accessor, align, render }) => {
                return (
                  <td align={align || 'left'} key={accessor}>
                    {render ? render(data[accessor], data) : data[accessor]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
