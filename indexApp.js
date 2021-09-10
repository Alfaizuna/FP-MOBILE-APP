import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import configureStore from './src/config/redux/store';

const store = configureStore();

export class IndexApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default IndexApp;
