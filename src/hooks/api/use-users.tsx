import { deleteUser, fetchUsers } from '../../lib/api/users';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

export const useDeleteUser = () => {
  const { invalidateQueries } = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: deleteUser,
    async onSuccess() {
      invalidateQueries({ queryKey: ['users'] });
    },
    async onError() {
      console.log('Something went wrong.');
    },
  });

  return {
    ...rest,
    deleteUser: mutate,
  };
};
