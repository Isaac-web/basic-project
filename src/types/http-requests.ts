import type { User } from './entities';

export type FetchUsersQueryParams = {
  page?: number;
  per_page?: number;
};

export type CreateUserFormData = Omit<User, 'id'>;

export type UpdateUserFormData = Partial<Omit<User, 'id'>>;
