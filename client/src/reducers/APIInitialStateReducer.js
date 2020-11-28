import { FETCH } from '../actions/types';

const INITIAL_STATE = {
  apiResponse: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, apiResponse: 'working' };

    default:
      return state;
  }
};

/*
const fetchData = () => {
  const response = '';

  fetch('hhtp://localhost:9000/testAPI').then((res) =>
    res.text().then((res) => (response = res))
  );
  return response;
};*/
