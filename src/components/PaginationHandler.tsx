import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

interface IPaginationHandler {
  prefix: string;
  page: string;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  articlesLength: number;
}

const PaginationHandler: React.FC<IPaginationHandler> = (props) => {
  const {
    prefix,
    page,
    handlePreviousPage,
    handleNextPage,
    articlesLength,
  } = props;

  return (
    <div className={ `${prefix}__pagination-handler` }>
      <button
        type="button"
        className={ `${prefix}__pagination-handler__previous` }
        disabled={ page === '1' }
        onClick={ () => handlePreviousPage() }
      >
        <GrPrevious size={ 25 } />
      </button>
      <p className={ `${prefix}__pagination-handler__current-page` }>{ page }</p>
      <button
        type="button"
        className={ `${prefix}__pagination-handler__next` }
        disabled={ articlesLength < 10 }
        onClick={ () => handleNextPage() }
      >
        <GrNext size={ 25 } />
      </button>
    </div>
  );
};

export default PaginationHandler;
