import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomeContext } from '../context';
import * as actions from '../actions';

import { HomePageLayout } from '../components/HomePageLayout';

export const HomePageContainer = () => {

  const dispatch = useDispatch();

  const getAllLocations = useSelector(state => state.getAllLocations);

  useEffect(() => {
    dispatch(actions.GET_ALL_LOCATIONS_REQUEST());
    return () => {
      dispatch(actions.GET_ALL_LOCATIONS_RESET());
    };
  }, [dispatch]);

  return <HomeContext.Provider value={{
    getAllLocations,
  }}>
    <HomePageLayout />
  </HomeContext.Provider>;
};