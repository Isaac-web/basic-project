import { apiClient } from '.';
import type { FetchUsersQueryParams, FetchUsersResponse } from '../../types';

export const fetchUsers = async (
  params: FetchUsersQueryParams = { page: 1, per_page: 10 },
) => {
  const { data: res } = await apiClient.get<FetchUsersResponse>('/users', {
    params,
  });

  return res;
};
