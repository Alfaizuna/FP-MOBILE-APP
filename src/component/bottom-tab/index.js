import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { mygreen } from '../../constant';
import TabItem from '../tab-item';

BottomTab = ({state, descriptors, navigation}) => {
  return (
    <View style={{ backgroundColor: 'white'}}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={index}
              label={label}
              isFocused={isFocused}
              onLongPress={onLongPress}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 0.5,
    borderColor: mygreen,
    borderBottomWidth:0,
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius:50,
    // marginHorizontal: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default BottomTab;
