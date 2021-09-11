import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from '../../component/bottom-tab';
import {connect} from 'react-redux';
import {signIn} from '../../config/redux/actions/AuthAction';

const title = 'Sign In';
const labelUsername = 'Username';
const labelPassword = 'Password';
const forgotPassword = 'Forgot Your Password ?';
const subtitle = 'Please sign in to continue';
const google = 'Sign in with google';
const dha = "Don't have account ?";
const su = ' Sign Up';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorUsername: '',
      errorPassword: '',
      visible: true,
      userLists: [],
      userInfo: {},
      userLogin: {},
      token: '',
    };
  }

  saveUserLogin = async userLogin => {
    await AsyncStorage.setItem('@userlogin', JSON.stringify(userLogin));
  };

  getLogin = () => {
    const {username, password} = this.state;
    let user = {username: username, password: password};
    axios
      .post('http://192.168.43.131:8080/car/login', user)
      .then(response => {
        // console.log(response);
        if (response.data.errorMessage === 'Invalid username / password') {
          console.log(response.data);
          Alert.alert('Sorry...', 'Login failed');
        } else {
          Alert.alert('Congrats...', 'login success');
          this.saveUserLogin(response.data);
          this.props.doLogin(response.data);
          return this.props.navigation.replace('BottomTab');
        }
        // console.log(response.data);
        // this.setState({userLogin: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  renderIconEye = () => <Icon name="eye" size={17} color="grey" />;
  renderIconEyeSlash = () => <Icon name="eye-slash" size={17} color="grey" />;
  renderVisibleButton = () => {
    if (this.state.visible) {
      return (
        <TouchableOpacity
          style={styles.visibleButtonStyle}
          onPress={() => this.setState({visible: false})}>
          {this.renderIconEyeSlash()}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.visibleButtonStyle}
          onPress={() => this.setState({visible: true})}>
          {this.renderIconEye()}
        </TouchableOpacity>
      );
    }
  };

  changeInputUsername = username => {
    this.setState({username, errorUsername: ''});
  };

  changeInputPassword = password => {
    this.setState({password, errorPassword: ''});
  };

  doLoginButton = () => {
    const {username, password} = this.state;

    if (username === '') {
      this.setState({
        errorUsername: 'input is not valid',
      });
    }

    if (password === '') {
      this.setState({
        errorPassword: 'input is not valid',
      });
    }

    if (username !== '' && password !== '') {
      // alert('login');
      return this.getLogin();
    }
  };

  render() {
    const {username, password} = this.state;
    const {userLogin} = this.props;
    console.log(username, password);
    console.log('user login:', userLogin);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerView}>
          {/* start logo */}
          {/* <Text style={styles.title}>Mobilcu Rental Car</Text> */}
          <Image
            style={{width: 100, height:70, alignItems:'center'}}
            source={require('../../images/splash.png')}
          />

          {/* end logo */}

          {/* start title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          {/* end title */}

          {/* start input */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelUsername}>{labelUsername}</Text>
            <Input
              onChangeText={this.changeInputUsername}
              errorMessage={this.state.errorUsername}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Enter your username"
            />
            <Text style={styles.labelUsername}>{labelPassword}</Text>
            <Input
              onChangeText={this.changeInputPassword}
              errorMessage={this.state.errorPassword}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Enter your password"
              secureTextEntry={this.state.visible}
              rightIcon={this.renderVisibleButton}
            />
          </View>
          {/* end input */}

          {/* start forgot password */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgotPasswordText}>{forgotPassword}</Text>
          </TouchableOpacity>
          {/* end forgot password */}

          {/* button login */}
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.doLoginButton}>
              <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
          </View>

          {/* or */}
          <View style={styles.buttonOr}>
            <Text style={styles.textOr}>Or</Text>
          </View>

          {/* google button */}
          <View style={styles.viewGoogleButton}>
            <TouchableOpacity
              style={styles.buttonSocmed}
              // onPress={this.googleSignIn}
            >
              <Icon name="google" size={20} color="#03C4A1" />
              <Text style={styles.textGoogleButton}>{google}</Text>
            </TouchableOpacity>
          </View>

          {/* button sign up */}
          <View style={styles.viewRegisterButton}>
            <Text>{dha}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.textButtonSignUp}>{su}</Text>
            </TouchableOpacity>
          </View>

          {/* end */}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  // userList: state.auth.userList,
  userLogin: state.Auth.userLogin,
});

const mapDispatchToProps = dispatch => ({
  doLogin: data => dispatch(signIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
