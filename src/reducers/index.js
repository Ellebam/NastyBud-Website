import { combineReducers } from 'redux';
import windowSizeReducer from './windowSizeReducer';

export default combineReducers({
  windowsize: windowSizeReducer,
});
