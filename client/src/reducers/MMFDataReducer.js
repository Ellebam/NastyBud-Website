import { RECEIVE_CONTENT_DATA, REQUEST_CONTENT_DATA } from '../actions/types';

const INITIAL_STATE = {
  MMFData: [],
  isLoading: false,
  isLoaded: false,
  isError: false,
  errorMsg: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CONTENT_DATA:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
        errorMsg: '',
      };

    case RECEIVE_CONTENT_DATA:
      return {
        ...state,
        MMFData: action.MMFData,
        isLoading: false,
        isLoaded: true,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
