import React from 'react';
import Main from './app/Main';
import { Provider } from "react-redux";
import configureStore from './app/store/index';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
)
