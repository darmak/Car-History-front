import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './store';
import 'antd/dist/antd.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
