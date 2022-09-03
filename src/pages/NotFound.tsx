import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../images/not-found.png';
import '../styles/NotFound.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <img src={ NotFoundImg } alt="Man on a paper boat looking at a fishless sea" />
      <h1>OOPS... PAGE NOT FOUND</h1>
      <button type="button" onClick={ () => navigate('/') }>Home Page</button>
    </div>
  );
};

export default NotFound;
