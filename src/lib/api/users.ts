import { apiClient } from '.';
import type {
  FetchUsersQueryParams,
  FetchUsersResponse,
  User,
} from '../../types';

export const fetchUsers = async (
  params: FetchUsersQueryParams = { page: 1, per_page: 10 },
) => {
  const { data: res } = await apiClient.get<FetchUsersResponse>('/users', {
    params,
  });

  return res;
};

export const deleteUser = async (userId: number) => {
  const { data: res } = await apiClient.delete<User>(`/users/${userId}`);

  return res;
};
