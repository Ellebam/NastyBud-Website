import {
  HIDE,
  SCREEN_RESIZE,
  SHOW,
  FETCH,
  REQUEST_CONTENT_DATA,
  RECEIVE_CONTENT_DATA,
} from './types';
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

export const fetchContentAPIData = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: REQUEST_CONTENT_DATA,
    });
    console.log('working');
    try {
      const response = await backendServer.get('/testAPI');
      dispatch({
        type: RECEIVE_CONTENT_DATA,
        MMFData: response.data,
        isError: false,
        errorMsg: '',
      });
    } catch (error) {
      dispatch({
        type: RECEIVE_CONTENT_DATA,
        MMFData: [],
        isError: true,
        errorMsg: error,
      });
    }
  };
};

export const fetchAPIData = () => {
  return async (dispatch, getState) => {
    const response = await backendServer.get('/testAPI');
    dispatch({
      type: FETCH,
      payload: response.data[4],
    });
  };
};
