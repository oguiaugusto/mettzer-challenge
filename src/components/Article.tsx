import React, { useState } from 'react';
import { RiArticleFill } from 'react-icons/ri';
import {
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsStar,
  BsStarFill,
} from 'react-icons/bs';
import { IArticle } from '../interfaces/Article';
import '../styles/Article.scss';

interface ArticleProps {
  article: IArticle;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const [showUrls, setShowUrls] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="article">
      <div className="article__main">
        {
          article.types.length > 0
            ? <p className="article__types">{ article.types.join(', ') }</p> : null
        }
        <div className="article__title">
          <RiArticleFill size={ 50 } className="article__icon" />
          <h3>{ article.title }</h3>
        </div>
        <p className="article__authors">{ article.authors.join(', ') }</p>
        <p className="article__description">{ article.description }</p>
        <div className="article__buttons">
          <button
            type="button"
            onClick={ () => setShowUrls(!showUrls) }
            className="article__expand-urls"
          >
            {
              showUrls ? <BsChevronCompactUp size={ 20 } /> : <BsChevronCompactDown size={ 20 } />
            }
            <p>URLS</p>
          </button>
          <button
            type="button"
            className="article__favorite"
            onClick={ () => setIsFavorite(!isFavorite) }
          >
            {
              isFavorite ? <BsStarFill size={ 20 } /> : <BsStar size={ 20 } />
            }
          </button>
        </div>
      </div>
      <div className={ `article__urls ${showUrls ? '' : 'article__urls-hide'}` }>
        {
          article.fulltextUrls.map((url) => (
            <a key={ url } href={ url } target="_blank" rel="noreferrer">
              { url }
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default Article;
