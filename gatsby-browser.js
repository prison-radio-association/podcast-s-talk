import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/store';

const initialState = window.INITIAL_STATE || {};

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore(initialState);
  
  return ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};