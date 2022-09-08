import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IArticle } from '../interfaces/Article';
import fetchArticles from '../utils/fetchArticles';
import '../styles/SearchBar.scss';

interface SearchBarProps {
  setArticles: React.Dispatch<React.SetStateAction<IArticle[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setArticles, setLoading }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setArticles([]);

    const articlesResponse = await fetchArticles(query);
    setArticles(articlesResponse);

    setLoading(false);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={ query }
        onChange={ (e) => setQuery(e.target.value) }
        onKeyUp={ (e) => e.key === 'Enter' && handleSearch() }
        placeholder="Search for articles"
      />
      <button type="button" onClick={ handleSearch }>
        <BsSearch size={ 20 } color="#eee" />
      </button>
    </div>
  );
};

export default SearchBar;
