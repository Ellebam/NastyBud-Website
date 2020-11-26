import { SHOW, HIDE } from '../actions/types';

export default (state = { sidebarVisible: false }, action) => {
  switch (action.type) {
    case SHOW:
      return { ...state, sidebarVisible: true };

    case HIDE:
      return { ...state, sidebarVisible: false };

    default:
      return state;
  }
};
