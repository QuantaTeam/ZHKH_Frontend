import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterContext } from '../context';
import * as actions from '../actions';

import { FilterLayout } from '../components/FilterLayout';

export const FilterContainer = () => {

  const dispatch = useDispatch();

  const [filterState, setFilterState] = useState({
    district_code: [],
    defect_category_name: [],
    type_of_work_performed: [],
    district_name: [],
    name_of_the_management_company: [],
    name_of_the_service_organization: [],
    quality_evaluation: [],
    source_name: [],
    page: 1,
    resetPage: false,
    is_anomaly: false,
  });


  const handleChangeFilter = useCallback((data, name) => {
    setFilterState((state) => {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy[name] = data;
      stateCopy.resetPage = true;
      stateCopy.page = 1;
      return stateCopy;
    });
  }, []);

  useEffect(() => {
    let result = '';

    for (const array in filterState) {
      if (array === 'is_anomaly') {
        result = result + `&is_anomaly=${filterState[array]}`;
      }
      if (array === 'page') {
        result = filterState.resetPage ? result + '&skip=12' : result + `&skip${12 * filterState[array]}`;
      }
      if (filterState[array].length > 0) {
        result = result + `&${array}=` + filterState[array].map((item) => item.value).join(',');
      }
    }

    dispatch(actions.GET_ALL_LOCATIONS_REQUEST(result));
  }, [dispatch, filterState]);

  const handleChangePagination = useCallback((event, value) => {
    setFilterState(state => ({
      ...state,
      page: value,
      resetPage: false,
    }));
  }, []);

  return <FilterContext.Provider value={{
    filterState,
    handleChangeFilter,
    handleChangePagination,
  }}>
    <FilterLayout />
  </FilterContext.Provider>;
};