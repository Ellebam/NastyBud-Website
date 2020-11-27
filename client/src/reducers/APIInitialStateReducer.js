import { FETCH } from '../actions/types';

const initialState = { apiResponse: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, apiResponse: { fetchData } };
  }
  return state;
};

const fetchData = () => {
  const response = fetch('hhtp://localhost:9000/testAPI').then((res) =>
    res.text()
  );
  return response;
};
