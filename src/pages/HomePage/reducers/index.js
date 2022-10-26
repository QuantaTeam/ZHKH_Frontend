import { createReducer } from '@reduxjs/toolkit';

import * as actions from '../actions';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  success: false,
  fail: false,
};

export const lol = createReducer(initialState, {
  [actions.LOL]: (state) => ({
    ...state,
    isLoading: true,
    data: null,
    error: null,
    success: false,
    fail: false,
  }),
});