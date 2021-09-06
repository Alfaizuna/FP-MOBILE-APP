import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Icons extends Component {
    
    render() {
        const{color, label, size}=this.props

        if(label==='Home'){
            return <Icon name="home" size={size} color={color} />;
        }   

        if (label === 'Order') {
          return <Icon name="car" size={size} color={color} />;
        } 

        if (label === 'Profile') {
          return <Icon name="user-circle" size={size} color={color} />;
        } 

        return <Icon name="tachometer-alt" size={size} color={color} />;
    }
}

export default Icons

// const styles = StyleSheet.create({
//   icon:{
//     alignContent:'center',
//     justifyContent:'center',
//   }
// })

