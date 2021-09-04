import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import styles from './styles';
// import {signIn} from './../../config/redux/actions/auth';

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
    };
  }

  renderIconEye = () => <Icon name="eye" size={17} color="grey" />;
  renderIconEyeSlash = () => <Icon name="eye-slash" size={17} color="grey" />;
  renderVisibleButton = () => {
    if (this.state.visible) {
      return (
        <TouchableOpacity
          style={styles.visibleButtonStyle}
          onPress={() => this.setState({visible: false})}>
          {this.renderIconEye()}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.visibleButtonStyle}
          onPress={() => this.setState({visible: true})}>
          {this.renderIconEyeSlash()}
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

  render() {
    const {username, password} = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerView}>
          {/* start logo */}
          {/* <Text style={styles.title}>Mobilcu Rental Car</Text> */}
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
              errorMessage={this.state.errorUsername}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Enter your password"
              secureTextEntry={this.state.visible}
              rightIcon={this.renderVisibleButton}
            />
          </View>
          {/* end input */}

          {/* start forgot password */}
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotPasswordText}>{forgotPassword}</Text>
          </TouchableOpacity>
          {/* end forgot password */}

          {/* button login */}
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.button}
              //   onPress={this.onButtonPressed}
            >
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
              onPress={this.googleSignIn}>
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

export default Login;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   labelUsername: {
//     fontWeight: 'bold',
//   },
//   visibleButtonStyle: {
//     marginRight: 20,
//   },
//   containerView: {
//     flex: 1,
//     paddingHorizontal: 25,
//     paddingVertical: 25,
//   },
//   titleContainer: {
//     // paddingLeft: 20,
//     // paddingHorizontal: 20,
//   },
//   title: {
//     color: 'black',
//     fontSize: 28,
//     // fontWeight: '900',
//     // fontFamily: 'google-sans'
//     // paddingLeft: 20,
//   },
//   subtitle: {
//     color: 'grey',
//     fontSize: 14,
//     paddingTop: 5,

//     // paddingLeft: 20,
//   },
//   buttonSocmed: {
//     borderWidth: 0.5,
//     borderColor: 'grey',
//     width: '100%',
//     height: 50,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     // marginRight:10
//   },
//   inputContainerStyle: {
//     borderBottomWidth: 0,
//     // borderWidth: 1,
//     marginLeft: -10,
//     // marginRight: -10,
//     marginTop: 10,
//     borderRadius: 12,
//     paddingLeft: 10,
//     backgroundColor: '#EEEEEE',
//     // shadowColor: 'black',
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 2,
//     // },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 4,
//     // elevation: 5,
//   },
//   inputContainer: {
//     paddingTop: 50,
//     // marginRight: 10,
//   },
//   button: {
//     // borderWidth: 1.5,
//     // borderColor: '#4B40A4',
//     width: '100%',
//     height: 50,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//     // marginRight: 20,
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   forgotPasswordText: {
//     color: '#03C4A1',
//     textAlign: 'right',
//     paddingRight: 10,
//     marginTop: -10,
//   },
//   viewButton: {
//     paddingRight: 10,
//     paddingTop: 50,
//   },
//   buttonOr: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   textOr: {
//     color: 'grey',
//   },
//   viewGoogleButton: {
//     paddingRight: 10,
//   },
//   textGoogleButton: {
//     paddingLeft: 10,
//     fontSize: 14,
//   },
//   viewRegisterButton: {
//     alignItems: 'center',
//     //   borderWidth: 1,
//     marginTop: 70,
//     marginRight: 10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     //   height:120
//   },
//   textButtonSignUp: {
//     color: '#03C4A1',
//   },
// });
