import React from 'react';
import {View} from 'react-native';
import styles from './Map.styles';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoicG9wb3Y5MzciLCJhIjoiY2t0cG9zdHA0MDczYjJ1cW80ejE4N3ZvZyJ9.DcC4k_D8z4mVQeKrwmjY-g')

export default function MapComponent() {
    return (
    <View style={styles.page}>
        <View style={styles.container}>
            <MapboxGL.UserLocation 
                animated={true}
                visible={true}
            />
            <MapboxGL.MapView
                style={styles.map}
                zoomEnabled={true}
                rotateEnabled={true}
                zoomLevel={9}
            >
                <MapboxGL.UserLocation 
                    animated={true}
                    visible={true}
                />
                <MapboxGL.Camera defaultSettings={{
                    centerCoordinate: [23.094304,42.582637,23.565686,42.784036],
                    zoomLevel: 6,
                }} followUserLocation />
            </MapboxGL.MapView>
        </View>
    </View>
    )
}