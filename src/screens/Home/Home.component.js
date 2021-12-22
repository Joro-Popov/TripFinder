import React from 'react';
import {View, Text} from 'react-native';
import styles from './Home.styles';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    return (
        <View style={styles.safeArea}>
            <View style={styles.semiCircleTop} />
            <LinearGradient
                start={{x: 1.0, y: 0}}
                end={{x: 1, y: 1.5}}
                colors={['#19285D', '#A33E53']}
                style={styles.linearGradient}
            />
            <View style={styles.semiCircleBottom} />
        </View>
    );
};

export default Home;
