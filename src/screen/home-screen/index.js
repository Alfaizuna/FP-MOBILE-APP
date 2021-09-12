import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {mygreen} from '../../constant';
import {Input} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {signOut} from '../../config/redux/actions/AuthAction';
import {Picker} from '@react-native-picker/picker';
import {DatePicker} from '../../component/date-picker';
import {TimePicker} from '../../component/time-picker';
import axios from 'axios';
import {sendDataOrder} from '../../config/redux/actions/OrderAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: '',
      itemValueDriver: '',
      date: '',
      mode: '',
      show: false,
    };
  }

  hitApiOrder = datas => {
    axios
      .post('http://192.168.43.131:8080/order/chooseOrder', datas.data, {
        headers: datas.headers,
      })
      .then(response => {
        console.log('ini response', response.data);

        // Alert.alert('Congrats..', 'register success');
        // this.props.sendData(response.data);
        return this.props.navigation.navigate('OrderCar', response.data);
      })
      .catch(function (error) {
        console.log(error);
        // alert('salah input');
      });
  };

  onButtonPressFindCar = () => {
    const {itemValue, itemValueDriver} = this.state;
    const userLogin = this.props.userLogin;
    const token = userLogin.token;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    const datas = {
      data: {driver: itemValueDriver, city: itemValue},
      headers: headers,
    };

    this.hitApiOrder(datas);
  };

  logout = () => {
    AsyncStorage.setItem('@userlogin', '');
    this.props.doLogout();
    this.props.navigation.replace('Login');
  };

  render() {
    const {itemValue, itemValueDriver} = this.state;
    const username = this.props.userLogin;
    console.log(itemValue);
    console.log(itemValueDriver);
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
                Hello {username.username},
              </Text>

              <Text
                style={{fontSize: 25, color: 'black', paddingHorizontal: 0}}>
                Choose your Car ...
              </Text>
            </View>
          </View>
          {/* <View>
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
          </View> */}
          {/* <View style={{alignItems: 'center'}}>
            <Text>Or </Text>
          </View> */}
          <View
            style={{
              borderWidth: 0,
              width: '100%',
              height: 550,
              backgroundColor: '#EEEEEE',
              borderRadius: 15,
              alignItems: 'center',
              marginTop: 20,
              paddingHorizontal: 20,
              paddingTop: 20,
            }}>
            {/* <View
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
                  marginHorizontal: 5,
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
            </View> */}
            <View
              style={{
                borderWidth: 0.5,
                width: '100%',
                marginHorizontal: 0,
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: 400,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Icon name="map-marker-alt" size={20} color={mygreen} />
                <Text style={{paddingHorizontal: 15}}>Lokasi Rental Anda</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Picker
                  selectedValue={this.state.itemValue}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({itemValue})
                  }>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="Bekasi" value="BKS" />
                  <Picker.Item label="Jakarta" value="JKT" />
                </Picker>
              </View>
            </View>

            <View
              style={{
                borderWidth: 0.5,
                width: '100%',
                margin: 10,
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: 400,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Icon name="car" size={20} color={mygreen} />
                <Text style={{paddingHorizontal: 15}}>Driver</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Picker
                  selectedValue={this.state.itemValueDriver}
                  onValueChange={(itemValueDriver, itemIndex) =>
                    this.setState({itemValueDriver})
                  }>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="With Driver" value="0" />
                  <Picker.Item label="Without Driver" value="1" />
                </Picker>
              </View>
            </View>
            {/* datetime */}

            <DatePicker />
            <TimePicker />

            {/* button */}
            <TouchableOpacity
              onPress={() => {
                // alert('tes');
                this.onButtonPressFindCar();
              }}
              style={{
                borderWidth: 0,
                marginVertical: 10,
                width: 310,
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: mygreen,
              }}>
              <Text style={{color: 'white'}}>Cari Mobil</Text>
            </TouchableOpacity>
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
  userLogin: state.Auth.userLogin,
});

const mapDispatchToProps = dispatch => ({
  // doLogin: data => dispatch(signIn(data)),
  doLogout: () => dispatch(signOut()),
  sendData: data => dispatch(sendDataOrder(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
