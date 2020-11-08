import { SCREEN_RESIZE } from '../actions/types';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
        screenWidth: action.payload,
      });
  }
  return state;
};
