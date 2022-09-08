import React, { useState } from 'react';
import Article from '../components/Article';
import Header from '../components/Header';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';
import { IArticle } from '../interfaces/Article';
import '../styles/Home.scss';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="home-page">
      <Header />
      <SearchBar setArticles={ setArticles } setLoading={ setLoading } />
      <div className="articles">
        { loading ? <Loader /> : null }
        {
          articles.map((article) => (
            <Article key={ article.id } article={ article } />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
