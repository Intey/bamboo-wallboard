import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';

import App from './Containers/App';

import { store } from './Store'
import registerServiceWorker from './registerServiceWorker';
// {props.store.result[0].projectName}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

if (module.hot)
{
  module.hot.accept('./Store.js', () => {
    const nextReducer = require('./Store.js').rootReducer
    store.replaceReducer(nextReducer)
  }
  )
}
registerServiceWorker();
