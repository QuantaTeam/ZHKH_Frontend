import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { getAllLocations } from '../pages/HomePage/reducers/getAllLocations';
import { getLocationByID } from '../pages/HomePage/reducers/getLocationByID';
import { getFilterData } from '../pages/HomePage/reducers/getFilterData';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [],
  transforms: [],
};

const rootReducer = combineReducers({
  getAllLocations,
  getLocationByID,
  getFilterData,
});

export default persistReducer(persistConfig, rootReducer);