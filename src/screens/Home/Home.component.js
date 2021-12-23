import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import styles from './Home.styles';
import LinearGradient from 'react-native-linear-gradient';
import AuthForm from '../../components/home-screen/AuthForm/AuthForm.component';

const Home = () => {
    const [selectedLoginOption, setSelectedLoginOption] = useState('Login');

    return (
        <View style={styles.safeArea}>
            <View style={styles.semiCircleTop} />
            <LinearGradient
                start={{x: 1.0, y: 0}}
                end={{x: 1, y: 1.5}}
                colors={['#19285D', '#A33E53']}
                style={styles.linearGradient}
            />
            <View style={styles.authOptionsContainer}>
                <TouchableOpacity
                    onPress={() => setSelectedLoginOption('Login')}
                    style={[
                        styles.loginOption,
                        selectedLoginOption === 'Login' &&
                            styles.selectedOptionBackgroundColor,
                    ]}>
                    <Text style={styles.optionText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedLoginOption('Sign Up')}
                    style={[
                        styles.loginOption,
                        selectedLoginOption === 'Sign Up' &&
                            styles.selectedOptionBackgroundColor,
                    ]}>
                    <Text style={styles.optionText}>Sign Up</Text>
                </TouchableOpacity>
                <EntypoIcons
                    name="facebook-with-circle"
                    style={[styles.socialIcon, styles.facebookColor]}
                />
                <EntypoIcons
                    name="twitter-with-circle"
                    style={[styles.socialIcon, styles.twitterColor]}
                />
                <EntypoIcons
                    name="google--with-circle"
                    style={[styles.socialIcon, styles.googlePlusColor]}
                />
            </View>
            <AuthForm header={selectedLoginOption} />
            <View style={styles.semiCircleBottom} />
        </View>
    );
};

export default Home;
