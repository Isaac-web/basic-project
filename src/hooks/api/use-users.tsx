import {
  createUser,
  deleteUser,
  fetchUsers,
  getUserById,
  updateUser,
} from '../../lib/api/users';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { FetchUsersQueryParams, UpdateUserFormData } from '../../types';

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

export const useGetUserById = ({ userId }: { userId: number }) => {
  const queryRes = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUserById(userId),
  });

  return queryRes;
};

export const useCreateUser = ({
  onSuccess,
  onError,
}: {
  onSuccess?(): void;
  onError?(): void;
} = {}) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: createUser,
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      onSuccess?.();
    },
    onError() {
      onError?.();
    },
  });

  return {
    ...rest,
    createUser: mutate,
  };
};

export const useUpdateUser = ({
  userId,
  onSuccess,
  onError,
}: {
  userId: number;
  onSuccess?(): void;
  onError?(): void;
}) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: (data: UpdateUserFormData) => updateUser(userId, data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      onSuccess?.();
    },
    onError() {
      onError?.();
    },
  });

  return {
    ...rest,
    updateUser: mutate,
  };
};

export const useDeleteUser = ({
  onSuccess,
  onError,
}: {
  onSuccess?(): void;
  onError?(): void;
} = {}) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: deleteUser,
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      onSuccess?.();
    },
    onError() {
      onError?.();
    },
  });

  return {
    ...rest,
    deleteUser: mutate,
  };
};
