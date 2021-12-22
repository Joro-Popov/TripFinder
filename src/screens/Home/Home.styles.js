import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'blue',
    },
    container: {
        paddingHorizontal: '5%',
    },
    semiCircleTop: {
        backgroundColor: 'white',
        width: width + 100,
        height: width + 100,
        borderRadius: width + 100 / 2,
        position: 'absolute',
        top: -300,
        left: -160,
        zIndex: 999,
    },
    semiCircleBottom: {
        backgroundColor: 'white',
        width: width + 100,
        height: width + 100,
        borderRadius: width + 100 / 2,
        position: 'absolute',
        bottom: -300,
        right: -160,
        zIndex: 999,
    },
    linearGradient: {
        flex: 1,
    },
});

export default styles;
