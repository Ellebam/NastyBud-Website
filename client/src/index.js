import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import reducers from './reducers';
import { screenResize } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

window.addEventListener('resize', () => {
  store.dispatch(screenResize(window.innerWidth));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
