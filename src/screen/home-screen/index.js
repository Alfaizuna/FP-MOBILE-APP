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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <Icon name="sign-out-alt" size={20} color={mygreen} />
          </View>
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
          {/* <View style={{borderWidth: 1, marginVertical: 20}}> */}
          <TouchableOpacity
            style={{
              borderWidth: 0,
              backgroundColor: mygreen,
              padding: 10,
              marginVertical: 20,
              borderRadius:10
            }}>
            <Text style={{color: 'white'}}>Rent a Car</Text>
          </TouchableOpacity>
          {/* </View> */}
          {/* <View
            style={{
              borderWidth: 0,
              width: '100%',
              height: 180,
              backgroundColor: mygreen,
              borderRadius: 20,
              alignItems:'center'
            }}>
            <Text>banner</Text>
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

export default Home;

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
