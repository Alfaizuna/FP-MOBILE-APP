import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {mygreen} from '../../constant';


export class Profile extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            // borderWidth: 1,
            padding: 20,
            // marginRight: 20,
            // borderRadius: 10,
            backgroundColor: mygreen,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // borderBottomLeftRadius:50
          }}>
          <Text style={{fontSize: 14, color: 'white', paddingHorizontal: 0}}>
            Profile
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // borderWidth: 1,
              height: 30,
            }}>
            <Icon name="sign-out-alt" size={15} color="white" />
            <Text style={{paddingHorizontal: 10, fontSize: 14, color: 'white'}}>
              Sign out
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View
            style={{
              // borderWidth: 1,
              width: '100%',
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 30,
              // alignContent:'space-between',
              // flexDirection: 'row',
              // padding: 15,
              // paddingLeft:20
            }}>
            <Avatar
              rounded
              source={{
                uri: 'https://avatars.githubusercontent.com/u/83201939?v=4',
              }}
              style={{width: 150, height: 150}}
            />
            {/* <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // borderWidth: 1,
                height: 30,
              }}>
              <Icon name="sign-out-alt" size={15} color={mygreen} />
              <Text style={{paddingHorizontal: 10}}>Sign out</Text>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              // borderWidth: 2,
              borderColor: mygreen,
              width: '100%',
              height: 500,
              backgroundColor: 'white',
              borderRadius: 50,
              shadowColor: 'black',
              padding: 20,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
              elevation: 5,
            }}>
            <Text>Name</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 0,
                padding: 10,
                marginVertical: 10,
                borderRadius: 25,
              }}>
              <Text>Udin Markocop</Text>
            </View>

            <Text>Email</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 0,
                padding: 10,
                marginVertical: 10,
                borderRadius: 25,
              }}>
              <Text>Udin@gmail.com</Text>
            </View>

            <Text>No Handphone</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 0,
                padding: 10,
                marginVertical: 10,
                borderRadius: 25,
              }}>
              <Text>085638315131</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // padding: 20,
  },
  inputContainerStyle: {
    // borderBottomWidth: 0,
    borderWidth: 1,
    marginLeft: -10,
    // marginRight: -10,
    marginTop: 10,
    borderRadius: 12,
    paddingLeft: 10,
    backgroundColor: 'white',
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
