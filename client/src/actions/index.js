import { HIDE, SCREEN_RESIZE, SHOW, FETCH } from './types';
import backendServer from '../apis/backendServer';

export const screenResize = (width) => {
  return {
    type: SCREEN_RESIZE,
    payload: width,
  };
};

export const showSidebar = () => {
  return {
    type: SHOW,
    payload: {},
  };
};

export const hideSidebar = () => {
  return {
    type: HIDE,
    payload: {},
  };
};

export const fetchAPIData = () => {
  return async (dispatch, getState) => {
    const response = await backendServer.get('/testAPI');
    dispatch({
      type: FETCH,
      payload: response,
    });
  };
};
