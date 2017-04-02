import './styles.styl';
//
import React from 'react';
import { render } from 'react-dom';
//
import { Provider } from 'react-redux';
import { store } from './redux/store';
//
import { StatefulApp } from './conponents/App';

if (!process.env.ENV || 'development' === process.env.ENV) {
  require('./redux/store.test');
}

render(
  <Provider store={store}>
    <StatefulApp />
  </Provider>,
  document.querySelector('#app')
);
