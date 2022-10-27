import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../actions';

import { HomePageLayout } from '../components/HomePageLayout';

export const HomePageContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.GET_ALL_LOCATIONS_REQUEST());
    return () => {
      dispatch(actions.GET_ALL_LOCATIONS_RESET());
    }
  }, [dispatch]);
  return <HomePageLayout />;
};