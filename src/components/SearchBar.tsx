import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IArticle } from '../interfaces/Article';
import fetchArticles from '../utils/fetchArticles';
import '../styles/SearchBar.scss';

interface SearchBarProps {
  setArticles: React.Dispatch<React.SetStateAction<IArticle[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setArticles }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const articlesResponse = await fetchArticles(query);
    setArticles(articlesResponse);
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
