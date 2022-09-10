import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import '../styles/SearchBar.scss';

interface SearchBarProps {
  handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ query: e.target.value });
    setQuery(e.target.value);
  };

  useEffect(() => {
    const queryParam = searchParams.get('query');

    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={ query }
        onChange={ handleQueryChange }
        onKeyUp={ (e) => (e.key === 'Enter' && query.length > 0 ? handleSearch(query) : null) }
        placeholder="Search for articles"
      />
      <button
        type="button"
        onClick={ () => handleSearch(query) }
        disabled={ query.length === 0 }
      >
        <BsSearch size={ 20 } color="#eee" />
      </button>
    </div>
  );
};

export default SearchBar;
