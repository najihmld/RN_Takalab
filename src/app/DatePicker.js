import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const DatePicker = (props) => {
  const toLocation = () => {
    props.navigation.navigate('Location');
  };
  return (
    <View>
      <Text>DatePicker</Text>
      <Button title="Location" onPress={() => toLocation()} />
    </View>
  );
};

export default DatePicker;
