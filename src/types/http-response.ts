import type { User } from './entities';

type PaginatedResponseMetaDataCta = {
  label: string;
  url: string;
};

type PaginatedResponseMetaData = {
  powered_by: string;
  docs_url: string;
  upgrade_url: string;
  example_url: string;
  variant: string;
  message: string;
  cta: PaginatedResponseMetaDataCta;
  context: string;
};

type PaginatedResponseSupport = {
  url: string;
  text: string;
};

export type PaginatedResponse<T> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
  support: PaginatedResponseSupport;
  _meta: PaginatedResponseMetaData;
};

export type FetchUsersResponse = PaginatedResponse<User>;
