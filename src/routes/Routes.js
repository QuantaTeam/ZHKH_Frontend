import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePageContainer } from '../pages/HomePage/containers';

import { PrivateRoute } from './PrivateRoute';
import { ROUTES } from './routesName';

export const Itinerary = () => {
  return (
    <Routes >
      <Route path={ROUTES.HOME_PAGE} element={<HomePageContainer />} />
      <Route path={'*'} element={<PrivateRoute> <HomePageContainer /></PrivateRoute>} />
    </Routes >
  );
};