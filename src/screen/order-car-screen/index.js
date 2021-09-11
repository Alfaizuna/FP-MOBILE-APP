import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';

export class OrderCar extends Component {
  render() {
    const {dataOrder} = this.props;
    console.log('data:', dataOrder);
    return (
      <ScrollView style={styles.container}>
        <Text>Order</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding:20
  },
});

const mapStateToProps = state => ({
  // userList: state.auth.userList,
  // userLogin: state.Auth.userLogin,
  dataOrder: state.Order.dataOrder,
});

const mapDispatchToProps = dispatch => ({
  // doLogin: data => dispatch(signIn(data)),
  // doLogout: () => dispatch(signOut()),
  // sendData: data => dispatch(sendDataOrder(data)),
});

export default connect(mapStateToProps, null)(OrderCar);
