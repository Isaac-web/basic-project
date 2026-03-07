import type { ReactNode } from 'react';
import { useFetchUsers } from '../hooks/api/use-users';
import type { User } from '../types';

type TableColumn<T extends {}> = {
  label: string;
  accessor: string;
  element?(value: T): ReactNode;
  nodeProps?: {
    headerProps?: React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
    cellProps?: React.TdHTMLAttributes<HTMLTableDataCellElement>;
  };
};

const columns: TableColumn<User>[] = [
  { label: 'First Name', accessor: 'first_name' },
  { label: 'Last Name', accessor: 'last_name' },
  {
    label: 'Avatar',
    accessor: 'avatar',
    element(u) {
      return <img className="w-20" src={u.avatar} alt={u.first_name} />;
    },
  },
  { label: 'Email', accessor: 'email' },
];

export const UsersPage = () => {
  const { users, isLoading } = useFetchUsers();

  return (
    <section>
      <div className="w-full max-w-6xl mx-auto">
        {isLoading ? (
          <p className="text-sm text-center py-8">Loading...</p>
        ) : (
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
              {users.map((u) => (
                <tr>
                  {columns.map((c) => (
                    <td className="py-1 border-b border-black/5">
                      {c.element
                        ? c.element(u)
                        : u[c.accessor as keyof typeof u]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};
