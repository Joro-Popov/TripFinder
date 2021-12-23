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
        zIndex: 10,
    },
    semiCircleBottom: {
        backgroundColor: 'white',
        width: width + 100,
        height: width + 100,
        borderRadius: width + 100 / 2,
        position: 'absolute',
        bottom: -300,
        right: -160,
        zIndex: 10,
    },
    linearGradient: {
        flex: 1,
    },
    authOptionsContainer: {
        width: width / 3.5,
        height: '50%',
        position: 'absolute',
        top: '25%',
        alignItems: 'center',
    },
    loginOption: {
        width: '100%',
        height: '10%',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '7%',
    },
    optionText: {
        color: 'white',
        fontSize: width / 25,
    },
    selectedOptionBackgroundColor: {
        backgroundColor: '#D34851',
    },
    socialIcon: {
        fontSize: width / 8,
        marginVertical: '15%',
    },
    facebookColor: {
        color: '#4267B2',
    },
    twitterColor: {
        color: '#00acee',
    },
    googlePlusColor: {
        color: '#db4a39',
    },
});

export default styles;
