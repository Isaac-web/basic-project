import { fetchUsers } from '../../lib/api/users';
import { useQuery } from '@tanstack/react-query';
import type { FetchUsersQueryParams } from '../../types';

export const useFetchUsers = ({
  params,
}: {
  params?: FetchUsersQueryParams;
} = {}) => {
  const queryRes = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(params),
  });

  return { ...queryRes, users: queryRes.data?.data || [] };
};
