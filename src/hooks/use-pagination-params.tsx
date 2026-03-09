import { useLocation, useNavigate, useSearchParams } from 'react-router';

export const usePaginationParams = (
  {
    initialPage,
    initialLimit,
  }: {
    initialPage?: number;
    initialLimit?: number;
  } = { initialPage: 1, initialLimit: 10 },
) => {
  const [queryParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentPage =
    parseInt(queryParams.get('page') as string) || initialPage;
  const limit = parseInt(queryParams.get('limit') as string) || initialLimit;

  const setParams = ({ page, limit }: { page?: number; limit?: number }) => {
    if (page) queryParams.set('page', page.toString());
    if (limit) queryParams.set('limit', limit.toString());

    navigate(`${pathname}?${queryParams.toString()}`);

    return `${pathname}?${queryParams.toString()}`;
  };

  return {
    currentPage,
    limit,
    urlPath: `${pathname}?${queryParams.toString()}`,
    setParams,
  };
};
