import { createReducer } from '@reduxjs/toolkit';

import * as actions from '../actions';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  success: false,
  fail: false,
};

export const getFilterData = createReducer(initialState, {
  [actions.GET_FILTER_DATA_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
    data: null,
    error: null,
    success: false,
    fail: false,
  }),
  [actions.GET_FILTER_DATA_SUCCESS]: (state, { payload }) => {

    const response = payload.response;

    response.type_of_work_performed = response.type_of_work_performed.map((item) => { return { label: item, value: item }; });
    response.defect_category_name = response.defect_category_name.map((item) => { return { label: item, value: item }; });
    response.district_code = response.district_code.map((item) => { return { label: item, value: item }; });
    response.district_name = response.district_name.map((item) => { return { label: item, value: item }; });
    response.name_of_the_management_company = response.name_of_the_management_company.map((item) => { return { label: item, value: item }; });
    response.name_of_the_service_organization = response.name_of_the_service_organization.map((item) => { return { label: item, value: item }; });
    response.quality_evaluation = response.quality_evaluation.map((item) => { return { label: item, value: item }; });
    response.source_name = response.source_name.map((item) => { return { label: item, value: item }; });
    response.result_desc = response.result_desc.map((item) => { return { label: item, value: item }; });

    return {
      ...state,
      isLoading: false,
      data: response,
      error: null,
      success: true,
      fail: false,
    };
  },
  [actions.GET_FILTER_DATA_FAIL]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: null,
    error: payload.response,
    success: false,
    fail: true,
  }),
  [actions.GET_FILTER_DATA_RESET]: () => initialState,
});
