import { fetchUsers } from '../../lib/api/users';
import { useQuery } from '@tanstack/react-query';
import type { FetchUsersQueryParams } from '../../types';

export const useFetchUsers = ({
  params,
}: {
  params?: FetchUsersQueryParams;
} = {}) => {
  const queryRes = useQuery({
    queryKey: ['users', params],
    queryFn: () => fetchUsers(params),
  });

  return {
    ...queryRes,
    users: queryRes.data?.data || [],
    pagination: {
      currentPage: queryRes.data?.page,
      totalPages: queryRes.data?.total_pages,
      itemsPerPage: queryRes.data?.per_page,
      totalNumberOfItems: queryRes.data?.total,
    },
  };
};
