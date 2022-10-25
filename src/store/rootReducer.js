import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({

});

export default persistReducer(rootReducer);