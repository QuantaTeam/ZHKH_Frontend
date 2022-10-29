import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomeContext } from '../context';
import * as actions from '../actions';

import { HomePageLayout } from '../components/HomePageLayout';

export const HomePageContainer = () => {

  const dispatch = useDispatch();

  const getAllLocations = useSelector(state => state.getAllLocations);
  const getLocationByID = useSelector(state => state.getLocationByID);

  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  useEffect(() => {
    dispatch(actions.GET_ALL_LOCATIONS_REQUEST());
    return () => {
      dispatch(actions.GET_ALL_LOCATIONS_RESET());
    };
  }, [dispatch]);

  const handleGetLocation = useCallback((id) => {
    if (id === getLocationByID?.data?.id) {
      dispatch(dispatch(actions.GET_LOCATION_BY_ID_RESET()));
    } else {
      dispatch(actions.GET_LOCATION_BY_ID_REQUEST(id));
    }
  }, [dispatch, getLocationByID]);

  return <HomeContext.Provider value={{
    getAllLocations,
    dateFrom,
    dateTo,
    getLocationByID,
    setDateFrom,
    setDateTo,
    handleGetLocation,
  }}>
    <HomePageLayout />
  </HomeContext.Provider>;
};