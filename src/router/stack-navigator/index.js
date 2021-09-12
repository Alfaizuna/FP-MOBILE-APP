import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Register, InputOrderScreen, ForgotPassword, OrderCar} from '../../screen';
import { BottomTabNavigatorApp } from './../bottom-navigator/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { signIn } from '../../config/redux/actions/AuthAction';
import { Splash } from './../../screen/splash-screen/index';

const Stack = createNativeStackNavigator();

export class StackNavigatorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  root:'Login'
    };
  }

  async componentDidMount() {
    await this.checkUserLogin();
  }

  checkUserLogin = async () => {
    try {
      const userLogin = await AsyncStorage.getItem('@userlogin');
      if (userLogin !== null) {
        // value previously stored
        console.log('userLogin : ', userLogin);
        this.props.doLogin(userLogin)
        // return this.setState({root: 'BottomTab'});
      }
    } catch (e) {
      console.log('error:', e);
      // error reading value
    }
  };

  render() {
    if(!this.props.userLogin){
      return (
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigatorApp}
            options={{headerShown: false}}
          />
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
            name="InputOrder"
            component={InputOrderScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="OrderCar"
            component={OrderCar}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }

    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name="InputOrder"
          component={InputOrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderCar"
          component={OrderCar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = state => ({
  // userList: state.auth.userList,
  userLogin: state.Auth.userLogin,
  loginStatus: state.Auth.loginStatus
});

const mapDispatchToProps = dispatch => ({
  doLogin: data => dispatch(signIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigatorApp);
