import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { getAllLocations } from '../pages/HomePage/reducers/getAllLocations';
import { getLocationByID } from '../pages/HomePage/reducers/getLocationByID';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [],
  transforms: [],
};

const rootReducer = combineReducers({
  getAllLocations,
  getLocationByID,
});

export default persistReducer(persistConfig, rootReducer);