import { combineReducers } from 'redux';
import sidebarVisibleReducer from './sidebarVisibleReducer';
import windowSizeReducer from './windowSizeReducer';
import APIInitialStateReducer from './APIInitialStateReducer';
import MMDFDataReducer from './MMFDataReducer';

export default combineReducers({
  windowsize: windowSizeReducer,
  sidebarVisibility: sidebarVisibleReducer,
  MMFStatus: MMDFDataReducer,
  apiData: APIInitialStateReducer,
});
