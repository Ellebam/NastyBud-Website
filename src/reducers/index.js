import { combineReducers } from 'redux';
import sidebarVisibleReducer from './sidebarVisibleReducer';
import windowSizeReducer from './windowSizeReducer';

export default combineReducers({
  windowsize: windowSizeReducer,
  sidebarVisibility: sidebarVisibleReducer,
});
