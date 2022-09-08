import React, { useState } from 'react';
import Article from '../components/Article';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { IArticle } from '../interfaces/Article';
import '../styles/Home.scss';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  return (
    <div className="home-page">
      <Header />
      <SearchBar setArticles={ setArticles } />
      <div className="articles">
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
