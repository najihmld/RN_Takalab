import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const Intro = (props) => {
  const toDatePicker = () => {
    props.navigation.navigate('DatePicker');
  };
  return (
    <View>
      <Text>Intro</Text>
      <Button title="Set Date" onPress={() => toDatePicker()} />
    </View>
  );
};

export default Intro;
