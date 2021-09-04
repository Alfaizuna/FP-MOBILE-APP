import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '../../screen';

const Stack = createNativeStackNavigator();

export class StackNavigatorApp extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

export default StackNavigatorApp;
