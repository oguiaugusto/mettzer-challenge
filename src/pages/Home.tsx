import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Article from '../components/Article';
import Header from '../components/Header';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';
import { IArticle } from '../interfaces/Article';
import fetchArticles from '../utils/fetchArticles';
import handlePages from '../utils/handlePages';
import '../styles/Home.scss';
import PaginationHandler from '../components/PaginationHandler';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const handleSearch = async (query: string) => {
    setLoading(true);
    setArticles([]);

    const articlesResponse = await fetchArticles(query, page);
    setArticles(articlesResponse);

    setLoading(false);
  };
  const handlePreviousPage = () => handlePages('PREVIOUS', searchParams, setSearchParams);
  const handleNextPage = () => handlePages('NEXT', searchParams, setSearchParams);

  useEffect(() => {
    const query = searchParams.get('query') || '';

    if (query && query.length > 0) {
      handleSearch(query);
    }
  }, [page]);

  return (
    <div className="home-page">
      <Header />
      <SearchBar handleSearch={ handleSearch } />
      <div className="home-page__articles">
        { loading ? <Loader /> : null }
        {
          articles.map((article) => (
            <Article key={ article.id } article={ article } />
          ))
        }
      </div>
      {
        articles.length > 0 ? (
          <PaginationHandler
            prefix="home-page"
            page={ page }
            handlePreviousPage={ handlePreviousPage }
            handleNextPage={ handleNextPage }
            articlesLength={ articles.length }
          />
        ) : null
      }
    </div>
  );
};

export default Home;
