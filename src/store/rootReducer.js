import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { getAllLocations } from '../pages/HomePage/reducers/getAllLocations';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [],
  transforms: [],
};

const rootReducer = combineReducers({
  getAllLocations,
});

export default persistReducer(persistConfig, rootReducer);