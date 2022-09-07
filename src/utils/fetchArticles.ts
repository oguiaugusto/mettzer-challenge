import { IArticlesResponse } from '../interfaces/Article';

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const fetchArticles = async (query: string) => {
  const response = await fetch(
    `${REACT_APP_API_URL}${query}?urls=true&apiKey=${REACT_APP_API_KEY}`,
  );

  if (!response.ok) {
    return [];
  }

  const { data } = await response.json() as IArticlesResponse;
  return data;
};

export default fetchArticles;
