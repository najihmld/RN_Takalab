import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';

const Location = () => {
  return (
    <View style={styles.screen}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -7.1861605,
          longitude: 112.7743898,
          latitudeDelta: 0.085,
          longitudeDelta: 0.078,
        }}>
        <Marker
          coordinate={{latitude: -7.2085308, longitude: 112.7787977}}
          image={require('./icon.png')}
        />
        <Marker
          coordinate={{latitude: -7.1587044, longitude: 112.793853}}
          image={require('./icon.png')}
        />
        <Polyline
          coordinates={[
            {latitude: -7.2085308, longitude: 112.7787977},
            {latitude: -7.1588643, longitude: 112.7817216},
            {latitude: -7.1586521, longitude: 112.7880093},
            {latitude: -7.1587044, longitude: 112.7938538},
          ]}
          strokeColor="#000"
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default Location;
