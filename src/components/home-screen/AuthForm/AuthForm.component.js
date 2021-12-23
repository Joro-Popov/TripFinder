import React from 'react';
import {View, Text} from 'react-native';
import styles from './AuthForm.styles';

const AuthForm = ({header}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{header}</Text>
            </View>
        </View>
    );
};

export default AuthForm;
