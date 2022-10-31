import { createAction } from '@reduxjs/toolkit';

export const GET_ALL_LOCATIONS_REQUEST = createAction('GET_ALL_LOCATIONS_REQUEST');
export const GET_ALL_LOCATIONS_SUCCESS = createAction('GET_ALL_LOCATIONS_SUCCESS');
export const GET_ALL_LOCATIONS_FAIL = createAction('GET_ALL_LOCATIONS_FAIL');
export const GET_ALL_LOCATIONS_RESET = createAction('GET_ALL_LOCATIONS_RESET');

export const GET_LOCATION_BY_ID_REQUEST = createAction('GET_LOCATION_BY_ID_REQUEST');
export const GET_LOCATION_BY_ID_SUCCESS = createAction('GET_LOCATION_BY_ID_SUCCESS');
export const GET_LOCATION_BY_ID_FAIL = createAction('GET_LOCATION_BY_ID_FAIL');
export const GET_LOCATION_BY_ID_RESET = createAction('GET_LOCATION_BY_ID_RESET');

export const GET_FILTER_DATA_REQUEST = createAction('GET_FILTER_DATA_REQUEST');
export const GET_FILTER_DATA_SUCCESS = createAction('GET_FILTER_DATA_SUCCESS');
export const GET_FILTER_DATA_FAIL = createAction('GET_FILTER_DATA_FAIL');
export const GET_FILTER_DATA_RESET = createAction('GET_FILTER_DATA_RESET');