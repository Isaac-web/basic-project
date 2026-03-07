import { useFetchUsers } from '../hooks/api/use-users';
import type { User } from '../types';
import {
  AppTable,
  TablePagination,
  type TableColumn,
} from '../components/table';
import { usePaginationParams } from '../hooks/use-pagination-params';
import { DeleteUserButton } from '../components/DeleteUserButton';
import { Link } from 'react-router';

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
  {
    label: '',
    accessor: '',
    element(u) {
      return <DeleteUserButton user={u} />;
    },
  },
];

export const UsersPage = () => {
  const { setParams, currentPage, limit } = usePaginationParams({
    initialLimit: 8,
  });
  const { users, isLoading, pagination } = useFetchUsers({
    params: { page: currentPage, per_page: limit },
  });

  return (
    <section>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-10">
          <h3 className="text-3xl font-semibold">Users</h3>

          <Link to="/users/create">
            <button className="bg-purple-700 text-white px-4 py-2 rounded-sm">
              Add User
            </button>
          </Link>
        </div>
        {isLoading ? (
          <p className="text-sm text-center py-8">Loading...</p>
        ) : (
          <>
            <AppTable columns={columns} data={users} />
            <TablePagination
              currentPage={pagination.currentPage!}
              totalPages={pagination.totalPages!}
              onPageChange={(page) => setParams({ page })}
            />
          </>
        )}
      </div>
    </section>
  );
};
