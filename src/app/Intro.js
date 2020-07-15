import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const Intro = (props) => {
  const toDatePicker = () => {
    props.navigation.navigate('DatePicker');
  };
  return (
    <>
      <View styles={styles.screen} />
      <View style={styles.main} />
      <Button
        buttonStyle={{
          backgroundColor: '#008080',
          margin: 10,
        }}
        title="Click Me"
        onPress={() => toDatePicker()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  main: {
    flex: 0.45,
  },
});

export default Intro;
