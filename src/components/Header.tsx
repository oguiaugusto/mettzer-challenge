import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <p className="header__title">FindSci</p>
        <ul className="header__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
