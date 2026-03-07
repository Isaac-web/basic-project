import { useFetchUsers } from '../hooks/api/use-users';
import type { User } from '../types';
import {
  AppTable,
  TablePagination,
  type TableColumn,
} from '../components/table';
import { usePaginationParams } from '../hooks/api/use-pagination-params';

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
  const { setParams, currentPage, limit } = usePaginationParams();
  const { users, isLoading, pagination } = useFetchUsers({
    params: { page: currentPage, per_page: limit },
  });

  return (
    <section>
      <div className="w-full max-w-6xl mx-auto">
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
