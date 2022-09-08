import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <TailSpin height="50" width="50" color="#313131" />
    </div>
  );
};

export default Loader;
