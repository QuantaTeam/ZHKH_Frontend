import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { debounce } from '../../../hooks/debounce';

import { FilterContext } from '../context';
import * as actions from '../actions';

import { FilterLayout } from '../components/FilterLayout';

import { defaultFilterState } from './data';

export const FilterContainer = () => {

  const dispatch = useDispatch();

  const [filterState, setFilterState] = useState(defaultFilterState);

  const getAllLocations = useSelector(state => state.getAllLocations);

  const handleChangeFilter = useCallback((data, name) => {
    setFilterState((state) => {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy[name] = data;
      stateCopy.resetPage = true;
      stateCopy.page = 1;
      return stateCopy;
    });
  }, []);

  const useDebounce = (fn, delay) => {
    const debounced = useRef(debounce(fn, delay));
    return debounced.current;
  };

  const apiCall = useDebounce((data) => {
    let result = '';
    for (const array in data) {
      if (array === 'is_anomaly') {
        result = result + `&is_anomaly=${data[array]}`;
        continue;
      }
      if (array === 'page') {
        result = data.resetPage ? result + '&skip=0' : result + `&skip=${data[array] === 1 ? 0 * data[array] : 12 * (data[array] - 1)}`;
        continue;
      }
      if (array === 'query') {
        result = data.query ? result + `&query=${data[array]}` : result;
        continue;
      }
      if (array === 'creation_timestamp_start') {
        result = data.creation_timestamp_start ? result + `&creation_timestamp_start=${JSON.parse(JSON.stringify(data[array]))}` : result;
        continue;
      }
      if (array === 'creation_timestamp_end') {
        result = data.creation_timestamp_end ? result + `&creation_timestamp_end=${JSON.parse(JSON.stringify(data[array]))}` : result;
        continue;
      }
      if (data[array].length > 0) {
        result = result + `&${array}=` + data[array].map((item) => item.value).join(',');
      }
    }

    dispatch(actions.GET_ALL_LOCATIONS_REQUEST(result));
  }, 300);

  useEffect(() => {
    apiCall(filterState);
  }, [filterState, apiCall]);

  const handleChangePagination = useCallback((event, value) => {
    setFilterState(state => ({
      ...state,
      page: value,
      resetPage: false,
    }));
  }, []);

  const handleClearFilter = useCallback(() => {
    setFilterState(defaultFilterState);
  }, []);

  return <FilterContext.Provider value={{
    filterState,
    getAllLocations,
    handleChangeFilter,
    handleChangePagination,
    handleClearFilter,
  }}>
    <FilterLayout />
  </FilterContext.Provider>;
};