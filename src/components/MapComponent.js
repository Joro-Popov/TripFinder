import React from 'react';
import {View} from 'react-native';
import styles from './Map.styles';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoicG9wb3Y5MzciLCJhIjoiY2t0cG9zdHA0MDczYjJ1cW80ejE4N3ZvZyJ9.DcC4k_D8z4mVQeKrwmjY-g')

export default function MapComponent() {
    return (
    <View style={styles.page}>
        <View style={styles.container}>
            <MapboxGL.MapView style={styles.map} />
        </View>
    </View>
    )
}