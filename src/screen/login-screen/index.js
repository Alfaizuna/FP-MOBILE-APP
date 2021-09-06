import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
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

export default Login;