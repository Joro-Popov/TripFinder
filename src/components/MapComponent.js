import React from 'react';
import {View, Text} from 'react-native';
import styles from './Map.styles';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';

export default function MapComponent() {
    return (
    <View style={styles.page}>
         <MapView
            style={{flex: 1}}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        />
    </View>
    )
}