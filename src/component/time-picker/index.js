import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {mygreen} from '../../constant';

export const TimePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View> */}
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      <View
        style={{
          width: 310,
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}>
        {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
        <Text>Waktu Penjemputan</Text>
        <View
          style={{
            // flexDirection: 'column',
            paddingVertical: 10,
            borderWidth: 0,
          }}>
          <TouchableOpacity
            onPress={showTimepicker}
            style={{
              borderWidth: 0,
              height: 30,
              //   width: 310,
              //   marginRight: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              //   justifyContent: 'space-between',
            }}>
            <Icon name="clock" size={20} color={mygreen} />
            <Text style={{marginHorizontal: 10}}>Time : {date.getTime()}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
