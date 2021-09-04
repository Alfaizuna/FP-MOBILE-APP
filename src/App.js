import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StackNavigatorApp} from './router';
import { Login } from './screen';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigatorApp />
      </NavigationContainer>
    );
  }
}

export default App;
