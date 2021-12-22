import React from 'react';
import {View, Platform} from 'react-native';
import styles from './Map.styles';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY =
  Platform.OS === 'android'
    ? 'AIzaSyBF18IstK-OTQ_Cq_XS46Z9z1jpRWNRfc8'
    : 'AIzaSyCIdH8gqxAWpk2EZ8arv7hvxZdb4bUwCPk';

export default function MapComponent() {
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};

  return (
    <View style={styles.page}>
      <MapView
        style={styles.page}
        minZoomLevel={11}
        initialRegion={{
          latitude: 37.8025259,
          longitude: -122.4351431,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        }}>
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </View>
  );
}
