import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList,Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';

export class OrderCar extends Component {
  renderItem = ({item}) => {
    return (
      <ListItem onPress={() => {}}>
        <View style={styles.pic}>
          <Image
            source={{
              uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/10419/toyota-alphard-car-clipart-md.png',
            }}
            style={styles.picProfile}
          />
        </View>
        <ListItem.Content>
          <ListItem.Title>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.brand}</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.carName}</Text>
              <Text style={styles.nameTxt}>Rp {item.pricePerDay}</Text>
            </View>
          </ListItem.Title>
          {/* <ListItem.Subtitle>
            <View style={styles.end}>
              <Text style={styles.msgTxt}>
                {item.date !== '' ? item.date + ', ' + item.time : item.time}
              </Text>
            </View>
          </ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
    );
  };
  render() {
    const dataOrder = this.props.route.params
    console.log('data : ', dataOrder);
    return (
      <View style={styles.container}>
        <View style={{width: 350, borderWidth: 1, height:50, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
          <Text>List Cars</Text>
        </View>
        <FlatList
          data={dataOrder}
          keyExtractor={(item, idx) => idx}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
    borderWidth: 2.5,
    borderColor: '#02C4AD',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
  },
  nameTxt: {
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
  },
  time: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 13,
  },
  recentBar: {
    alignItems: 'flex-start',
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.07)',
    paddingLeft: 15,
  },
  picProfile: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});

const mapStateToProps = state => ({
  // userList: state.auth.userList,
  // userLogin: state.Auth.userLogin,
//   dataOrder: state.Order.dataOrder,
});

const mapDispatchToProps = dispatch => ({
  // doLogin: data => dispatch(signIn(data)),
  // doLogout: () => dispatch(signOut()),
  // sendData: data => dispatch(sendDataOrder(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCar);
