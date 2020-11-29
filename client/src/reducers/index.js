import { combineReducers } from 'redux';
import sidebarVisibleReducer from './sidebarVisibleReducer';
import windowSizeReducer from './windowSizeReducer';
import APIInitialStateReducer from './APIInitialStateReducer';

export default combineReducers({
  windowsize: windowSizeReducer,
  sidebarVisibility: sidebarVisibleReducer,
  apiData: APIInitialStateReducer,
});
