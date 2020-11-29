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

const fetchData = () => {
  let response = '';

  fetch('hhtp://localhost:9000/testAPI').then((res) =>
    res.text().then((data) => (response = data))
  );
  console.log(response);
  return response;
};
