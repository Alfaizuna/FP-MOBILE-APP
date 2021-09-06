import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Register} from '../../screen';
import { BottomTabNavigatorApp } from './../bottom-navigator/index';

const Stack = createNativeStackNavigator();

export class StackNavigatorApp extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="BottomTab">
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
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigatorApp}
          options={{headerShown: false}}
          
        />
      </Stack.Navigator>
    );
  }
}

export default StackNavigatorApp;
