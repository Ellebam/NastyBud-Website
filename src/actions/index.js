import { SCREEN_RESIZE } from './types';

export const screenResize = (width) => {
  return {
    type: SCREEN_RESIZE,
    payload: width,
  };
};
