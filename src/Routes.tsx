import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={ <Navigate to="/search" replace /> } />
      <Route path="/search" element={ <Home /> } />
      <Route path="favorites" element={ <Favorites /> } />
      <Route path="*" element={ <NotFound /> } />
    </Switch>
  );
};

export default Routes;
