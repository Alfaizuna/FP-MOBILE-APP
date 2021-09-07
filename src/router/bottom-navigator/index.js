import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Order, Profile} from '../../screen';
import BottomTab from './../../component/bottom-tab/index';

const Tab = createBottomTabNavigator();

export class BottomTabNavigatorApp extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName='Home' tabBar={props => <BottomTab {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{headerShown: false, title:'My Order'}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigatorApp;
