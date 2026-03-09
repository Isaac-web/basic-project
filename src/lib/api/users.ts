import { apiClient } from '.';
import type {
  CreateUserFormData,
  FetchUsersQueryParams,
  FetchUsersResponse,
  GetUserByIdResponse,
  UpdateUserFormData,
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

export const getUserById = async (userId: number) => {
  const { data: res } = await apiClient.get<GetUserByIdResponse>(
    `/users/${userId}`,
  );

  return res;
};

export const createUser = async (data: CreateUserFormData) => {
  const { data: res } = await apiClient.post<User>(`/users`, data);

  return res;
};

export const updateUser = async (userId: number, data: UpdateUserFormData) => {
  const { data: res } = await apiClient.patch<User>(`/users/${userId}`, data);

  return res;
};

export const deleteUser = async (userId: number) => {
  const { data: res } = await apiClient.delete<never>(`/users/${userId}`);

  return res;
};
