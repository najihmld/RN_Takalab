import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';

import {getListDate, getListTime} from '../app/actions';

const DatePicker = (props) => {
  const [listDate, setListDate] = useState([]);
  const [listTime, setListTime] = useState([]);
  const [timeSelected, setTimeSelected] = useState({});
  const [dateSelected, setDateSelected] = useState({});
  const toLocation = () => {
    props.navigation.navigate('Location');
  };

  useEffect(() => {
    const fetchListDate = async () => {
      const resDate = await getListDate();
      setListDate(resDate);
      dateSelected.id === undefined ? setDateSelected(resDate[0]) : null;
    };
    const fetchListTime = async () => {
      const resTime = await getListTime();
      setListTime(resTime);
    };
    fetchListDate();
    fetchListTime();
  });

  const pickADate = (item) => {
    setDateSelected(item);
    console.log(item);
  };

  const pickATime = (item) => {
    setTimeSelected(item);
    console.log(item);
  };

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
                  <TouchableOpacity onPress={() => pickADate(item)}>
                    {dateSelected.id === item.id ? (
                      <Text style={styles.textDateSelected}>{item.date}</Text>
                    ) : (
                      <Text style={styles.textDate}>{item.date}</Text>
                    )}
                  </TouchableOpacity>
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
                    <TouchableOpacity
                      onPress={() => pickATime(item)}
                      style={styles.toSelected}>
                      {timeSelected.id === item.id ? (
                        <View style={styles.selected}>
                          <Text
                            style={
                              styles.textDateSelected
                            }>{`${timeSelected.time} - ${timeSelected.until}`}</Text>
                        </View>
                      ) : null}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <Button
        buttonStyle={{
          backgroundColor: '#008080',
          margin: 10,
        }}
        title="Location"
        onPress={() => toLocation()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  conHeader: {
    flex: 0.2,
    backgroundColor: '#008080',
  },
  header: {
    height: 55,
  },
  listDatePick: {
    flexDirection: 'row',
  },
  main: {
    flex: 0.8,
    backgroundColor: '#ffffff',
  },
  listDate: {
    padding: 10,
    width: 100,
    alignContent: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  textDate: {
    color: 'white',
    opacity: 0.6,
  },
  textDateSelected: {
    color: 'white',
  },
  listTime: {
    backgroundColor: '#ffffff',
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
  toSelected: {
    paddingRight: 10,
    backgroundColor: 'transparent',
    height: 80,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#008080',
    padding: 10,
    height: 46,
    opacity: 0.7,
    borderRadius: 10 / 2,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#008080',
  },
});

export default DatePicker;
