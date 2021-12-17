import { combineReducers } from 'redux'
import { tabsReducer } from './tabs';
import { searchReducer } from './search';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:['search']
}

const rootReducer = combineReducers({
    tabs: tabsReducer,
    search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);