import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Home</Text>
            </ScrollView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    }
})