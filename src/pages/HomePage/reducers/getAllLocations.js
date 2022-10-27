import { createReducer } from '@reduxjs/toolkit';

import * as actions from '../actions';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  success: false,
  fail: false,
};

export const getAllLocations = createReducer(initialState, {
  [actions.GET_ALL_LOCATIONS_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
    data: null,
    error: null,
    success: false,
    fail: false,
  }),
  [actions.GET_ALL_LOCATIONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: payload.response,
    error: null,
    success: true,
    fail: false,
  }),
  [actions.GET_ALL_LOCATIONS_FAIL]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: null,
    error: payload.response,
    success: false,
    fail: true,
  }),
  [actions.GET_ALL_LOCATIONS_RESET]: () => initialState,
});
