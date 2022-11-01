import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomeContext } from '../context';
import * as actions from '../actions';

import { HomePageLayout } from '../components/HomePageLayout';

export const HomePageContainer = () => {

  const dispatch = useDispatch();

  const getAllLocations = useSelector(state => state.getAllLocations);
  const getLocationByID = useSelector(state => state.getLocationByID);
  const getFilterData = useSelector(state => state.getFilterData);

  useEffect(() => {
    dispatch(actions.GET_FILTER_DATA_REQUEST());
    return () => {
      dispatch(actions.GET_FILTER_DATA_RESET());
    };
  }, [dispatch]);

  const handleGetLocation = useCallback((id) => {
    if (getLocationByID?.data && (id === getLocationByID?.data['69'])) {
      dispatch(dispatch(actions.GET_LOCATION_BY_ID_RESET()));
    } else {
      dispatch(actions.GET_LOCATION_BY_ID_REQUEST(id));
    }
  }, [dispatch, getLocationByID]);

  return <HomeContext.Provider value={{
    getAllLocations,
    getLocationByID,
    getFilterData,
    handleGetLocation,
  }}>
    <HomePageLayout />
  </HomeContext.Provider>;
};