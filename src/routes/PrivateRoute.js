import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from './routesName';

export const PrivateRoute = ({ children }) => {

  const { isAuth } = useSelector(state => state.signIn);

  return isAuth ? children : <Navigate to={ROUTES.SIGN_IN_PAGE} />;

};