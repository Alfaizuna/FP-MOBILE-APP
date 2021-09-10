import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {mygreen} from '../../constant';
import {Input} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {signOut} from '../../config/redux/actions/AuthAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    AsyncStorage.setItem('@userlogin', '');
    this.props.doLogout();
    this.props.navigation.replace('Login');
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            // borderWidth: 1,
            // height: 50,
            paddingHorizontal: 20,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: mygreen,
          }}>
          <View
            style={{
              borderWidth: 1,
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: mygreen,
              borderRadius: 10,
            }}>
            <Icon name="car" size={20} color={mygreen} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: mygreen}}>Mobilcu Rent Car</Text>
          </View>
          <TouchableOpacity
            onPress={this.logout}
            style={{
              borderWidth: 1,
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: mygreen,
              borderRadius: 10,
            }}>
            <Icon name="sign-out-alt" size={20} color={mygreen} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
          <View
            style={{
              borderWidth: 0,
              width: '100%',
              height: 90,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{fontSize: 25, color: 'black', paddingHorizontal: 0}}>
                Hello Alfaizuna,
              </Text>

              <Text
                style={{fontSize: 25, color: 'black', paddingHorizontal: 0}}>
                Choose your car ...
              </Text>
            </View>
          </View>
          <View>
            <Input
              //   onChangeText={this.changeInputUsername}
              //   errorMessage={this.state.errorUsername}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Type your fav car"
              rightIcon={() => (
                <TouchableOpacity>
                  <Icon name="search" size={20} color={mygreen} />
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>Or </Text>
          </View>
          <View
            style={{
              borderWidth: 0,
              width: '100%',
              height: 480,
              backgroundColor: '#EEEEEE',
              borderRadius: 20,
              alignItems: 'center',
              marginTop:20,
              paddingHorizontal:10
            }}>
            <View
              style={{
                borderWidth: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                  backgroundColor: mygreen,
                  padding: 10,
                  marginVertical: 10,
                  marginHorizontal:5,
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 150,
                }}>
                <Text style={{color: 'white'}}>With Driver</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                  backgroundColor: mygreen,
                  padding: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 150,
                }}>
                <Text style={{color: 'white'}}>Without Driver</Text>
              </TouchableOpacity>
            </View>
            <View style={{borderWidth: 1, width: '100%', marginHorizontal: 20}}>
              <Text>Lokasi Rental Anda</Text>
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Type your fav car"
                leftIcon={() => (
                  <TouchableOpacity>
                    <Icon name="map-marker-alt" size={20} color={mygreen} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // flex: 1,
    padding: 20,
  },
  tinyLogo: {
    width: 150,
    height: 30,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    // borderWidth: 1,
    marginLeft: -10,
    // marginRight: -10,
    marginTop: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
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
});

const mapStateToProps = state => ({
  // userList: state.auth.userList,
  // userLogin: state.Auth.userLogin,
});

const mapDispatchToProps = dispatch => ({
  // doLogin: data => dispatch(signIn(data)),
  doLogout: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
