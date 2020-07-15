import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from './src/app/Intro';
import DatePicker from './src/app/DatePicker';
import Location from './src/app/Location';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="DatePicker" component={DatePicker} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}
