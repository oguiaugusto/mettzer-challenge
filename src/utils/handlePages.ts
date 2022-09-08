import { URLSearchParamsInit } from 'react-router-dom';

type SetSearchParams = (nextInit: URLSearchParamsInit, navigateOptions?: {
  replace?: boolean | undefined;
  state?: unknown;
} | undefined) => void

type HandlePages = (
  direction: 'NEXT' | 'PREVIOUS',
  searchParams: URLSearchParams,
  setSearchParams: SetSearchParams,
) => void;

const handlePages: HandlePages = (direction, searchParams, setSearchParams) => {
  const query = searchParams.get('query') || '';
  const page = Number(searchParams.get('page') || 1);

  if (direction === 'NEXT') {
    setSearchParams({ query, page: String(page + 1) });
  } if (direction === 'PREVIOUS') {
    setSearchParams({ query, page: String(page - 1) });
  }
};

export default handlePages;
