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

export const AppTable = <T extends { id: number }>({
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
            <th key={c.accessor} className="py-4" align="left">
              {c.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((c) => (
              <td key={c.accessor} className="py-1 border-b border-black/5">
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
