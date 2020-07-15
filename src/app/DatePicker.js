import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-elements';

import {getListDate, getListTime} from '../app/actions';

const DatePicker = (props) => {
  const [listDate, setListDate] = useState([]);
  const [listTime, setListTime] = useState([]);
  const toLocation = () => {
    props.navigation.navigate('Location');
  };

  useEffect(() => {
    const fetchListDate = async () => {
      const resDate = await getListDate();
      setListDate(resDate);
    };
    const fetchListTime = async () => {
      const resTime = await getListTime();
      setListTime(resTime);
    };
    fetchListDate();
    fetchListTime();
  });

  return (
    <View style={styles.screen}>
      <View style={styles.conHeader}>
        <View style={styles.header} />
        <View style={styles.listDatePick}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listDate}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => {
              return (
                <View style={styles.listDate}>
                  <Text>{item.date}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listTime}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            return (
              <View style={styles.listTime}>
                <View style={styles.timeTitle}>
                  <Text style={styles.title}>{item.time}</Text>
                  <View style={styles.line}>
                    <View style={styles.selected}>
                      <Text>
                        {item.time} - {item.until}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <Button title="Location" onPress={() => toLocation()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  conHeader: {
    flex: 0.2,
    backgroundColor: 'red',
  },
  header: {
    height: 55,
  },
  listDatePick: {
    flexDirection: 'row',
  },
  main: {
    flex: 0.8,
    backgroundColor: 'yellow',
  },
  listDate: {
    padding: 10,
    width: 90,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  listTime: {
    backgroundColor: 'orange',
    height: 80,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  timeTitle: {
    flexDirection: 'row',
  },
  title: {
    flex: 0.15,
    paddingLeft: 10,
  },
  line: {
    marginTop: 10,
    flex: 0.85,
    borderStartColor: '#0e0e0e',
    borderTopWidth: 1,
  },
});

export default DatePicker;
