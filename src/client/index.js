import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from '../common/containers/App';
import percents from '../common/redux/percents';

const preloadedState = window.__PRELOADED_STATE__
const store = createStore(percents)
const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)
