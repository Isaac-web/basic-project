import { useFetchUsers } from '../hooks/api/use-users';
import type { User } from '../types';
import { usePaginationParams } from '../hooks/use-pagination-params';
import { DeleteUserButton } from '../components/DeleteUserButton';
import { Link } from 'react-router';
import { FetchErrorState } from '../components/FetchErrorState';
import { RotatingLines } from 'react-loader-spinner';
import { UpdateUserButton } from '../components/EditUserButton';
import { AppTable } from '../components/table/Table';
import type { TableColumn } from '../components/table/Table';
import { TablePagination } from '../components/table/TablePagination';

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
      return (
        <div className="flex gap-x-2">
          <UpdateUserButton user={u} />
          <DeleteUserButton user={u} />
        </div>
      );
    },
  },
];

export const UsersPage = () => {
  const { setParams, currentPage, limit } = usePaginationParams({
    initialLimit: 8,
  });
  const { users, isLoading, isError, pagination, refetch } = useFetchUsers({
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
          <div className="flex gap-5 justify-center items-center py-24">
            <RotatingLines
              height="30"
              width="30"
              color="oklch(49.6% 0.265 301.924)"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <p className="text-sm text-center">Loading...</p>
          </div>
        ) : isError ? (
          <FetchErrorState onRetry={() => refetch()} />
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
