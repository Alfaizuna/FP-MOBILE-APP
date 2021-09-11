import React, { Component } from 'react'
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';


export class Order extends Component {
    render() {
        return (
          <ScrollView style={styles.container}>
            <Text>Order</Text>
          </ScrollView>
        );
    }
}

export default Order
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});