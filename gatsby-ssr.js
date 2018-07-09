import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'universal-cookie';

import createStore from './src/store';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = createStore();
  
  const ConnectedBody = () => (
    <Provider store={store}>
      <CookiesProvider cookies={new Cookies()}>
        {bodyComponent}
      </CookiesProvider>
    </Provider>
  );

  let html = renderToString(<ConnectedBody />);
  html += `
  <script type="text/javascript">
    window.INITIAL_STATE = ${JSON.stringify(store.getState())};
  </script>`;

  replaceBodyHTMLString(html);
};