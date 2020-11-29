import { FETCH } from '../actions/types';

const INITIAL_STATE = {
  apiResponse: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, apiResponse: action.payload };

    default:
      return state;
  }
};
