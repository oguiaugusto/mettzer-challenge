import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={ <Home /> } />
      <Route path="favorites" element={ <Favorites /> } />
    </Switch>
  );
};

export default Routes;
