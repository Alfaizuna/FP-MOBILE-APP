import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import { mygreen } from '../../constant';

class InputOrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              padding: 20,
              //   flexDirection: 'row',
            }}>
            <View
              style={{
                // flex: 1,
                backgroundColor: 'white',
                // padding: 20,
                  flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                  backgroundColor: mygreen,
                  padding: 10,
                  marginVertical: 20,
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 100,
                }}>
                <Text style={{color: 'white'}}>Rent a Car</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                  backgroundColor: mygreen,
                  padding: 10,
                  marginVertical: 20,
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 200,
                  marginHorizontal:10
                }}>
                <Text style={{color: 'white'}}>Antar Jemput Bandara</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}

export default InputOrderScreen;