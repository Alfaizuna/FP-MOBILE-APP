import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerView}> 
                    <Text style={styles.title} >Sign Up</Text>
                </View>
            </View>
        )
    }
}

export default Register

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
});