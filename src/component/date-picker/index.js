import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { mygreen } from '../../constant';


export const DatePicker = () => {
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

  const renderDay = day => {
    if (day === 0) {
      return 'Sunday';
    }

    if (day === 1) {
      return 'Monday';
    }

    if (day === 2) {
      return 'Tuesday';
    }

    if (day === 3) {
      return 'Wednesday';
    }

    if (day === 4) {
      return 'Thrusday';
    }

    if (day === 5) {
      return 'Friday';
    }

    if (day === 6) {
      return 'Saturday';
    }
  };

  return (
    <View>
      <View style={{width: 310, borderWidth: 0}}>
        {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
        <Text>Tanggal Penjemputan</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <TouchableOpacity
            onPress={showDatepicker}
            style={{
              borderWidth: 0,
              height: 50,
              //   width: 310,
              marginRight: 10,
            }}>
            <Icon name="calendar-week" size={20} color={mygreen} />
          </TouchableOpacity>
          <Text>
            Date : {renderDay(date.getDay())}, {date.getDate()} /{' '}
            {date.getMonth()} / {date.getFullYear()}{' '}
          </Text>
        </View>
      </View>
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
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
