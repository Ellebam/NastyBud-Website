import { combineReducers } from 'redux';
import sidebarVisibleReducer from './sidebarVisibleReducer';
import windowSizeReducer from './windowSizeReducer';
import clothingItemReducer from './clothingItemsReducer';

export default combineReducers({
  windowsize: windowSizeReducer,
  sidebarVisibility: sidebarVisibleReducer,
  clothingItems: clothingItemReducer,
});
