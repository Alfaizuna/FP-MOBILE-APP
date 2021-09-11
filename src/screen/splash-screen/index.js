import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Text> textInComponent </Text> */}
        <Image
          style={{width: 300, height: 200}}
          source={require('../../images/splash.png')}
        />
      </View>
    );
  }
}

export default Splash;
