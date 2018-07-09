import 'babel-polyfill';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureAnchors } from 'react-scrollable-anchor';
import { CookiesProvider } from 'react-cookie';

configureAnchors({ offset: -56, scrollDuration: 400 })

import createStore from './src/store';

const initialState = window.INITIAL_STATE || {};

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore(
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return ({ children }) => (
    <Provider store={store}>
      <CookiesProvider>
        <Router history={history}>{children}</Router>
      </CookiesProvider>
    </Provider>
  );
};
