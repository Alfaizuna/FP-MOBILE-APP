import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const google = 'Sign up with google';
const labelUsername = 'Username';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorUsername: '',
      errorPassword: '',
      visible: true,
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

  render() {
    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.containerView}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>
              Sign Up to continue using mobilcu rent car
            </Text>

            {/* google button */}
            <View style={styles.viewGoogleButton}>
              <TouchableOpacity
                style={styles.buttonSocmed}
                //   onPress={this.googleSignIn}
              >
                <Icon name="google" size={20} color="#03C4A1" />
                <Text style={styles.textGoogleButton}>{google}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginVertical: 15,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: 'grey'}}>
                Or Sign Up Manually
              </Text>
            </View>

            {/* input */}
            <View
              style={{
                marginVertical: 15,
              }}>
              <Text style={styles.label}>Name</Text>
              <Input
                // onChangeText={this.changeInputUsername}
                // errorMessage={this.state.errorUsername}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Enter your name"
              />
              <Text style={styles.label}>{labelUsername}</Text>
              <Input
                onChangeText={this.changeInputUsername}
                errorMessage={this.state.errorUsername}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Enter your username"
              />
              <Text style={styles.label}>Email</Text>
              <Input
                // onChangeText={this.changeInputUsername}
                // errorMessage={this.state.errorUsername}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Enter your email"
              />
              <Text style={styles.label}>Password</Text>
              <Input
                // onChangeText={this.changeInputPassword}
                // errorMessage={this.state.errorUsername}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Enter your password"
                secureTextEntry={this.state.visible}
                rightIcon={this.renderVisibleButton}
              />
              <Text style={styles.label}>Confirm Password</Text>
              <Input
                // onChangeText={this.changeInputPassword}
                // errorMessage={this.state.errorUsername}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Enter your password"
                secureTextEntry={this.state.visible}
                rightIcon={this.renderVisibleButton}
              />
              <Text style={styles.label}>Birth of Date</Text>
              <Input
                // onChangeText={this.changeInputUsername}
                // errorMessage={this.state.errorUsername}
                inputContainerStyle={styles.inputContainerStyle}
                // placeholder="Enter your email"
              />
              <Text style={styles.label}>Address</Text>
              <Input
                // onChangeText={this.changeInputUsername}
                // errorMessage={this.state.errorUsername}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Enter your address"
              />
            </View>
          </View>
        </ScrollView>
        <View style={{backgroundColor:'white'}}>
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.button}
              //   onPress={this.onButtonPressed}
            >
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerView: {
    // flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  title: {
    color: 'black',
    fontSize: 28,
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
    paddingVertical: 5,
  },
  button: {
    // borderWidth: 1.5,
    // borderColor: '#4B40A4',
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    // marginRight: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
  },
  textGoogleButton: {
    paddingLeft: 10,
    fontSize: 14,
  },
  viewGoogleButton: {
    paddingRight: 10,
    marginVertical: 20,
  },
  buttonSocmed: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    // marginRight:10
  },
  label: {
    fontWeight: 'bold',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    // borderWidth: 1,
    marginLeft: -10,
    // marginRight: -10,
    marginTop: 5,
    borderRadius: 12,
    paddingLeft: 10,
    backgroundColor: '#EEEEEE',
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  visibleButtonStyle: {
    marginRight: 20,
  },
  viewButton: {
    paddingRight: 35,
    paddingVertical: 10,
    paddingLeft:25
  },
});
