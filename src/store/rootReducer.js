import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { lol } from '../pages/HomePage/reducers/index';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [],
  transforms: [],
};


const rootReducer = combineReducers({
  lol,
});

export default persistReducer(persistConfig, rootReducer);