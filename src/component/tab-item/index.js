import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icons from '../icons/IconTab';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  return (
    <TouchableOpacity
      //   key={index}
      //   accessibilityRole="button"
      //   accessibilityState={isFocused ? {selected: true} : {}}
      //   accessibilityLabel={options.tabBarAccessibilityLabel}
      //   testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Icons color={isFocused ? '#03C4A1' : 'grey'} label={label} size={20} />
        <Text
          style={{
            color: isFocused ? '#03C4A1' : 'grey',
            fontSize: 10,
            paddingVertical: 2,
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;
