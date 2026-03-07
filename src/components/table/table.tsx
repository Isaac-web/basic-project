import type { ReactNode } from 'react';

export type TableColumn<T extends {}> = {
  label: string;
  accessor: string;
  element?(value: T): ReactNode;
  nodeProps?: {
    headerProps?: React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
    cellProps?: React.TdHTMLAttributes<HTMLTableDataCellElement>;
  };
};

export const AppTable = <T extends {}>({
  columns,
  data,
}: {
  columns: TableColumn<T>[];
  data: T[];
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((c) => (
            <th className="py-4" align="left">
              {c.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((c) => (
              <td className="py-1 border-b border-black/5">
                {c.element
                  ? c.element(item)
                  : (item[c.accessor as keyof typeof item] as ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
