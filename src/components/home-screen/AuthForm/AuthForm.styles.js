import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        width: width / 1.6,
        height: '50%',
        position: 'absolute',
        top: '25%',
        backgroundColor: '#19285D',
        right: 0,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderRadius: 10,
    },
    headerContainer: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        padding: '5%',
    },
    header: {
        color: 'white',
        fontSize: width / 15,
    },
});

export default styles;
