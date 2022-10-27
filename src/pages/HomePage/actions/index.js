import { createAction } from '@reduxjs/toolkit';

export const GET_ALL_LOCATIONS_REQUEST = createAction('GET_ALL_LOCATIONS_REQUEST');
export const GET_ALL_LOCATIONS_SUCCESS = createAction('GET_ALL_LOCATIONS_SUCCESS');
export const GET_ALL_LOCATIONS_FAIL = createAction('GET_ALL_LOCATIONS_FAIL');
export const GET_ALL_LOCATIONS_RESET = createAction('GET_ALL_LOCATIONS_RESET');